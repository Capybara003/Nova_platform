import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Holding',
  description: 'Holding Data',
}

export interface HoldingProps {
  children: React.ReactNode
}

const HoldingLayout: React.FC<HoldingProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default HoldingLayout
