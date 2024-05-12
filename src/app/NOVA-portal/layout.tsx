import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'NOVA-portal',
  description: 'NOVA-portal Data',
}

export interface NOVAportalLayoutProps {
  children: React.ReactNode
}

const NOVAportalLayout: React.FC<NOVAportalLayoutProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default NOVAportalLayout
