import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'

// POST /api/auth/login
export async function GET(request: NextRequest) {
  const ownerId = request.nextUrl.pathname.split('/').slice(-1)[0]

  const wallet = await prisma.wallet.findMany({
    where: {
      ownerId: Number(ownerId),
    },
  })

  return NextResponse.json({ wallet: wallet, message: 'Success', success: true }, { status: 200 })
}
