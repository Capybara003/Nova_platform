import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

import prisma from 'lib/prisma'

// POST /api/auth/register
export async function POST(request: NextRequest) {
  const { userName, email, password, registerType } = await request.json()

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (user) {
    return NextResponse.json({ message: 'User already exists', success: false }, { status: 409 })
  }

  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const hashPassword = await bcrypt.hash(password, salt)

  const newUser = await prisma.user.create({
    data: {
      userName,
      email,
      password: hashPassword,
      registerType,
    },
  })
  return NextResponse.json(
    {
      user: {
        id: newUser.id,
        userName: newUser.userName,
        email: newUser.email,
      },
      success: true,
    },
    { status: 201 }
  )
}
