import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export interface ResetPasswordProps {
  children: React.ReactNode
}

const ResetPasswordLayout: React.FC<ResetPasswordProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default ResetPasswordLayout
