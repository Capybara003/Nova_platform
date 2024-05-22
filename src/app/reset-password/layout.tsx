import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export interface ResetPPasswordProps {
  children: React.ReactNode
}

const ResetPPasswordLayout: React.FC<ResetPPasswordProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default ResetPPasswordLayout
