import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

import prisma from 'lib/prisma'

// POST /api/auth/login
export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (!user) {
    return NextResponse.json({ message: 'User not found', success: false }, { status: 400 })
  }

  const passwordMatch = bcrypt.compare(password, user.password || '')

  if (!passwordMatch) {
    return NextResponse.json({ message: 'Wrong password', success: false }, { status: 400 })
  }

  return NextResponse.json(
    {
      user: {
        id: user.id,
        userName: user.userName,
        email: user.email,
      },
      message: 'Success',
      success: true,
    },
    { status: 201 }
  )
}
