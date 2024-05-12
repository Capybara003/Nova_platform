'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { bsc } from 'viem/chains'
import { PropsWithChildren } from 'react'
//  cardano, ada
const projectId = '675de18eb0219de165421decbb53efa4'
const chains = [bsc]
const wagmiConfig = defaultWagmiConfig({ projectId, chains })

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  featuredWalletIds: ['8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4'],
  defaultChain: bsc,
})

const Web3Modal: React.FC<PropsWithChildren> = ({ children }) => {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}

export default Web3Modal
