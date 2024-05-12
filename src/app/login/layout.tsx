import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export interface LoginProps {
  children: React.ReactNode
}

const LoginLayout: React.FC<LoginProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default LoginLayout
