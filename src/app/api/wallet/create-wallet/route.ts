import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'

// POST /api/wallet/create-wallet
export async function POST(request: NextRequest) {
  const { walletAddress, walletName, ownerId } = await request.json()

  let wallet = await prisma.wallet.findFirst({
    where: {
      walletAddress,
    },
  })

  if (wallet?.ownerId !== Number(ownerId)) {
    wallet = await prisma.wallet.update({
      where: {
        id: wallet?.id,
      },
      data: {
        ownerId: Number(ownerId),
      },
    })
  }

  if (!wallet) {
    wallet = await prisma.wallet.create({
      data: {
        walletAddress,
        walletName,
        ownerId,
      },
    })
  }

  return NextResponse.json({ wallet: wallet, message: 'Success', success: true }, { status: 201 })
}
