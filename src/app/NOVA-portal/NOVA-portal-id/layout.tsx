import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'NOVA-portal-id',
  description: 'NOVA-portal-id Data',
}

export interface NOVAPortalByProps {
  children: React.ReactNode
}

const NOVAPortalIdLayout: React.FC<NOVAPortalByProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default NOVAPortalIdLayout
