import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'single-collection-trades',
  description: 'single-collection-trades Data',
}

export interface SingleProps {
  children: React.ReactNode
}

const SinglePropsLayout: React.FC<SingleProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default SinglePropsLayout
