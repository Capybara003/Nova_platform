import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'NOVA-Naut-id',
  description: 'NOVA-Naut-id Data',
}

export interface NOVANautByProps {
  children: React.ReactNode
}

const NOVANautIdLayout: React.FC<NOVANautByProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default NOVANautIdLayout
