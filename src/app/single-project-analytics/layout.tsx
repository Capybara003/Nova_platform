import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'single project analytics',
  description: 'single project analytics Data',
}

export interface SingleProps {
  children: React.ReactNode
}

const SingleProjectAnalyticsLayout: React.FC<SingleProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default SingleProjectAnalyticsLayout
