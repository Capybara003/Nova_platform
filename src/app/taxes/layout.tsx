import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Taxxes',
  description: 'Taxxes Data',
}

export interface TaxesProps {
  children: React.ReactNode
}

const SingleCollectionLayout: React.FC<TaxesProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default SingleCollectionLayout
