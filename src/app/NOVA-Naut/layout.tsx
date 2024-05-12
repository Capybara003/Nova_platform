import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'NOVA-Naut',
  description: 'NOVA-Naut Data',
}

export interface NOVANautProps {
  children: React.ReactNode
}

const NOVANautLayout: React.FC<NOVANautProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default NOVANautLayout
