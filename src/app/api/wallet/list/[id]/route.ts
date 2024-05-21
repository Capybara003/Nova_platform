import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'

// POST /api/wallet/list/[id]
export async function GET(request: NextRequest) {
  const ownerId = request.nextUrl.pathname.split('/').slice(-1)[0]

  const wallet = await prisma.wallet.findMany({
    where: {
      ownerId: Number(ownerId),
    },
    select: {
      id: true,
      walletAddress: true,
      walletName: true,
    },
  })

  return NextResponse.json({ wallet: wallet, message: 'Success', success: true }, { status: 200 })
}
