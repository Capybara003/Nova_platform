/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'
import { hashPassword } from 'utils/password'

// POST /api/auth/reset-password
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
      return NextResponse.json({ message: 'Invalid User', user: null, success: false }, { status: 400 })
    }

    const hashedPassword = await hashPassword(password)

    await prisma.account.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    })

    return NextResponse.json({ success: true, user: user.email, message: 'Success' }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, user: '', message: 'Internal Server Error' }, { status: 500 })
  }
}
