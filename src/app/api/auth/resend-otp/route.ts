/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'
import { generateOTP } from 'utils/password'
import sendMail from 'utils/sendMail'

// POST /api/auth/resend-otp
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    const user = await prisma.account.findFirst({
      where: {
        email,
        isDeleted: false,
      },
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found', success: false }, { status: 400 })
    }

    if (user.emailVerified) {
      return NextResponse.json({ success: true, message: 'Email Already Verified' }, { status: 208 })
    }

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
        success: true,
        message: 'OTP send to registered email address.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, user: null, message: 'Internal Server Error' }, { status: 500 })
  }
}
