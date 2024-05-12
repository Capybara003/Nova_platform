import { Suspense } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'

export interface AccountProps {
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountProps> = ({ children }) => {
  return <Suspense fallback={<Spinner />}>{children}</Suspense>
}

export default AccountLayout
