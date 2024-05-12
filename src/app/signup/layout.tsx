import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export interface SignUpProps {
  children: React.ReactNode
}

const SignUpLayout: React.FC<SignUpProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default SignUpLayout
