import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export interface OtpVerificationProps {
  children: React.ReactNode
}

const OtpVerificationLayout: React.FC<OtpVerificationProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default OtpVerificationLayout
