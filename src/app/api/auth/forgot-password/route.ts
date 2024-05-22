/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'
import { generatePassword } from 'utils/password'
import sendMail from 'utils/sendMail'

// POST /api/auth/forgot-password
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    const user = await prisma.user.findFirst({
      where: {
        email,
        isDeleted: false,
      },
    })

    if (!user) {
      return NextResponse.json({ message: 'Invalid User', success: false }, { status: 400 })
    }

    const newPassword = await generatePassword()
    const hashPass = `${newPassword}-${Date.now()}`
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashPass,
      },
    })

    const BASE_URL = process.env.BASE_URL

    const message = `Dear ${user.userName},

    We hope this message finds you well.
    
    As requested, here is your password reset link: ${BASE_URL}reset-password/${user.id}$${newPassword}
    
    Please use this link to reset your password. This link is available for 15 minutes.
                
    Thank you for using our services!
    
    Best regards,
    NOVA`
    await sendMail(email, message, 'Password Recovery: Password reset')
    return NextResponse.json({ success: true, message: 'Password reset link sent.' }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, user: null, message: 'Internal Server Error' }, { status: 500 })
  }
}
