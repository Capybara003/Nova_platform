/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'
import { generateOTP, hashPassword } from 'utils/password'
import sendMail from 'utils/sendMail'

// POST /api/auth/register
export async function POST(request: NextRequest) {
  try {
    const { userName, email, password, registerType } = await request.json()

    const user = await prisma.user.findFirst({
      where: {
        email,
        isDeleted: false,
      },
    })

    if (user) {
      return NextResponse.json({ message: 'User already exists', success: false }, { status: 409 })
    }

    if (registerType === 'google' || registerType === 'discord') {
      const newUser = await prisma.user.create({
        data: {
          userName,
          email,
          registerType,
          emailVerified: true,
        },
      })
      return NextResponse.json(
        {
          user: {
            id: newUser.id,
            userName: newUser.userName,
            email: newUser.email,
          },
          message: 'User registered successfully',
          success: true,
        },
        { status: 201 }
      )
    }

    const otp = generateOTP()
    const hashedPassword = await hashPassword(password)

    const newUser = await prisma.user.create({
      data: {
        userName,
        email,
        password: hashedPassword,
        otp,
        registerType,
      },
    })

    const message = `Dear ${newUser.userName},
    
    Thank you for registering with NOVA. To complete your email verification process, 
    please use the following OTP (One-Time Password):
    
    Your OTP: ${otp}
    
    Please enter this OTP in the designated field on our website to verify your email address and activate your account. 
    If you did not initiate this verification or have any concerns, please contact our support team immediately at nova@nova.com.
    
    We value your trust in our services and look forward to serving you. 
    If you have any questions or need assistance, please don't hesitate to reach out.
    
    Best regards,
    NOVA`

    await sendMail(email, message, 'Email Verification OTP for NOVA')

    return NextResponse.json(
      {
        user: {
          id: newUser.id,
          userName: newUser.userName,
          email: newUser.email,
        },
        message: 'User registered successfully',
        success: true,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    NextResponse.json({ success: false, user: null, message: 'Internal Server Error' }, { status: 500 })
  }
}
