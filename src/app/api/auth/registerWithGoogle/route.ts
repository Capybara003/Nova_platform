import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'

// POST /api/auth/registerWithGoogle
export async function POST(request: NextRequest) {
  const { userName, email, password, registerType } = await request.json()

  let user = await prisma.user.findFirst({
    where: {
      email,
    },
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        userName,
        email,
        password,
        registerType,
      },
    })
  }

  return NextResponse.json({ user: user, message: 'Success', success: true }, { status: 201 })
}
