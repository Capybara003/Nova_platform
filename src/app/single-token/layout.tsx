import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Single Token',
  description: 'Single Token',
}

export interface SingleTokenProps {
  children: React.ReactNode
}

const SingleTokenLayout: React.FC<SingleTokenProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default SingleTokenLayout
