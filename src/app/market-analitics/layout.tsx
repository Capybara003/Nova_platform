import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Market Analitics',
  description: 'Market Analitics Data',
}

export interface MarketAnaliticsProps {
  children: React.ReactNode
}

const MarketAnaliticsLayout: React.FC<MarketAnaliticsProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default MarketAnaliticsLayout
