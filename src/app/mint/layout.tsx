import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Mint',
  description: 'Mint Data',
}

export interface MintProps {
  children: React.ReactNode
}

const MintLayout: React.FC<MintProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default MintLayout
