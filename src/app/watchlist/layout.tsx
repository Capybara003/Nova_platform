import { Metadata } from 'next'
import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export const metadata: Metadata = {
  title: 'Watchlist Collections',
  description: 'Watchlist Data',
}

export interface WatchlistProps {
  children: React.ReactNode
}

const WatchlistLayout: React.FC<WatchlistProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default WatchlistLayout
