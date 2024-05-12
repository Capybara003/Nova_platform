import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Revenu Calculator',
  description: 'Revenu Calculator Data',
}

export interface RevenuProps {
  children: React.ReactNode
}

const RevenuLayout: React.FC<RevenuProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default RevenuLayout
