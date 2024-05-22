/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

import prisma from 'lib/prisma'

// POST /api/wallet/create-wallet
export async function POST(request: NextRequest) {
  const { id } = await request.json()

  try {
    await prisma.wallet.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({ message: 'Wallet Deleted', success: true }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    NextResponse.json({ success: false, message: 'Something Went Wrong' }, { status: 500 })
  }
}
