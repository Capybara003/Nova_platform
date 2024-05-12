import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export interface projectProps {
  children: React.ReactNode
}

const PojectLayout: React.FC<projectProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default PojectLayout
