/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'
import sendMail from 'utils/sendMail'

// POST /api/auth/verify-email
export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json()

    const user = await prisma.account.findFirst({
      where: {
        email,
        isDeleted: false,
      },
    })

    if (!user) {
      return NextResponse.json({ message: 'Invalid User', success: false }, { status: 409 })
    }

    if (user.emailVerified) {
      return NextResponse.json({ success: true, message: 'Email Already Verified' }, { status: 208 })
    }

    if (otp !== user.otp) {
      return NextResponse.json({ success: false, message: 'Invalid opt.' }, { status: 200 })
    }

    await prisma.account.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerified: true,
      },
    })
    const message = `Dear ${user.userName},

      We are excited to inform you that your email/profile verification has been successfully completed. 🎉
      
      Your account is now officially verified and ready for use. Thank you for taking the time to complete the verification process. 
      This step is crucial in ensuring the security and integrity of your account.
      
      If you have any questions or need further assistance, please don't hesitate to reach out to our support team. We're here to help.
      
      Once again, congratulations on your successful verification!
      
      Best regards,
      NOVA`

    await sendMail(email, message, 'Your Email Verification successful!')
    return NextResponse.json({ success: true, message: 'Email verified successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, user: null, message: 'Internal Server Error' }, { status: 500 })
  }
}
