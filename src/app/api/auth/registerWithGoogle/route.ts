/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

import prisma from 'lib/prisma'

// POST /api/auth/registerWithGoogle
export async function POST(request: NextRequest) {
  const { userName, email, password, registerType } = await request.json()

  if (registerType == 'google' || registerType == 'discord') {
    try {
      let user = await prisma.user.findFirst({
        where: {
          email,
          isDeleted: false,
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

      const token = jwt.sign(user.email, process.env.NEXTAUTH_SECRET || '')

      return NextResponse.json(
        {
          user: {
            ...user,
            token,
          },
          message: 'Success',
          success: true,
        },
        { status: 201 }
      )
    } catch (error) {
      console.error('Error:', error)
      NextResponse.json({ success: false, user: null, message: 'Internal Server Error' }, { status: 500 })
    }
  }
}
