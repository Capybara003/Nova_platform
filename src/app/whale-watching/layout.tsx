import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Whale Watchlist Collections',
  description: 'Whale Watchlist Data',
}

export interface WhaleWatchingProps {
  children: React.ReactNode
}

const WhaleWatchlistLayout: React.FC<WhaleWatchingProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default WhaleWatchlistLayout
