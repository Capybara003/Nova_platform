/* eslint-disable import/order */
import Spinner from 'design-systems/Atoms/Spinner'
import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Single Collection',
  description: 'Single Collection Data',
}

export interface SingleCollectionProps {
  children: React.ReactNode
}

const SingleCollectionLayout: React.FC<SingleCollectionProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default SingleCollectionLayout
