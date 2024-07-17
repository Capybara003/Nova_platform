/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

import prisma from 'lib/prisma'
import { comparePasswords, generateOTP } from 'utils/password'
import sendMail from 'utils/sendMail'

// POST /api/auth/login
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    const user = await prisma.account.findFirst({
      where: {
        email,
        isDeleted: false,
      },
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found', success: false }, { status: 400 })
    }

    if (user.registerType == 'google') {
      return NextResponse.json({ success: false, message: 'Please login with google' }, { status: 400 })
    }

    const passwordMatch = await comparePasswords(password, user.password || '')

    if (!passwordMatch) {
      return NextResponse.json({ message: 'Incorrect email or password.', success: false }, { status: 400 })
    }
    if (!user.emailVerified) {
      const otp = generateOTP()
      await prisma.account.update({
        where: {
          id: user.id,
        },
        data: {
          otp,
        },
      })

      const message = `Dear ${user.userName},

      We noticed that you recently requested an OTP (One-Time Password) for your account but might not have received it. 
      To ensure a seamless experience, we're resending your OTP to the email address or phone number associated with your account.
      
      Your OTP: ${otp}
      
      Please use this OTP to complete your intended action. If you did not request this OTP or have any concerns about your account's security, 
      please contact our support team immediately at nova@nova.com.
      
      Thank you for using our services, and we apologize for any inconvenience. 
      If you have any further questions or need assistance, feel free to reach out to us.
      
      Best regards,
      NOVA`

      await sendMail(email, message, 'Verify your OTP')

      return NextResponse.json(
        {
          user: {
            id: user.id,
            userName: user.userName,
            email: user.email,
          },
          message: 'Email not verified, please verify your email.',
          success: false,
        },
        { status: 400 }
      )
    }

    const token = jwt.sign(user.email, process.env.NEXTAUTH_SECRET || '')

    return NextResponse.json(
      {
        user: {
          id: user.id,
          userName: user.userName,
          email: user.email,
          token,
        },
        message: 'User Logged In successfully',
        success: true,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, user: null, message: 'Internal Server Error' }, { status: 500 })
  }
}
