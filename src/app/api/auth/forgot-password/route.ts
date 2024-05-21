/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'
import { generatePassword, hashPassword } from 'utils/password'
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
    const hashPass = await hashPassword(newPassword)
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashPass,
      },
    })

    const message = `Dear ${user.userName},

    We hope this message finds you well.
    
    As requested, here is your temporary password: ${newPassword}
    
    Please use this temporary password to log in to your account. 
    We recommend changing your password to something more secure once you've logged in.
                
    Thank you for using our services!
    
    Best regards,
    NOVA`
    await sendMail(email, message, 'Password Recovery: Your Temporary Password')
    NextResponse.json(
      {
        success: true,
        message: 'Password updated successfully.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error:', error)
    NextResponse.json({ success: false, user: null, message: 'Internal Server Error' }, { status: 500 })
  }
}
