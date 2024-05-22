/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'

// POST /api/auth/validate-link
export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()
    if (!token) {
      return NextResponse.json({ message: 'Invalid Link', user: '', success: false }, { status: 400 })
    }

    const [id, password] = token.split('$')
    if (!id || !password) {
      return NextResponse.json({ message: 'Invalid Link', user: '', success: false }, { status: 400 })
    }

    const user = await prisma.user.findFirst({
      where: {
        id: Number(id),
        isDeleted: false,
      },
    })

    if (!user) {
      return NextResponse.json({ message: 'Invalid Link', user: '', success: false }, { status: 400 })
    }

    const [hash, iat] = user.password?.split('-') || []

    if (hash !== password) {
      return NextResponse.json({ message: 'Invalid Link', user: '', success: false }, { status: 400 })
    }

    if (iat < (Date.now() - 1000 * 60 * 15).toString()) {
      return NextResponse.json({ message: 'Link Expired', user: '', success: false }, { status: 400 })
    }

    return NextResponse.json({ success: true, user: user.email, message: 'Link Validated' }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ success: false, user: '', message: 'Internal Server Error' }, { status: 500 })
  }
}
