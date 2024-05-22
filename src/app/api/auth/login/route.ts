/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

import prisma from 'lib/prisma'
import { comparePasswords } from 'utils/password'

// POST /api/auth/login
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    const user = await prisma.user.findFirst({
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
      return NextResponse.json(
        { message: 'Email not verified, please verify your email.', success: false },
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
