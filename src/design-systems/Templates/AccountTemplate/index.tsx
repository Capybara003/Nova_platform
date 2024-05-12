import { useState } from 'react'

import Spinner from 'design-systems/Atoms/Spinner'
import AccountInfo from 'design-systems/Molecules/AccountMolecules/AccountInfo'
import ConnectedWallet from 'design-systems/Molecules/AccountMolecules/ConectedWallets'
import ConnectedExchanges from 'design-systems/Molecules/AccountMolecules/ConnectedExchanges'
import CuurentAbos from 'design-systems/Molecules/AccountMolecules/CurrentAbos'
import MintHistory from 'design-systems/Molecules/AccountMolecules/MintHistory'
import PaymentHistory from 'design-systems/Molecules/AccountMolecules/PaymentHistory'

const AccountTemplate: React.FC = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      {!loading ? (
        <div className="grid w-full !grid-cols-1 items-center gap-[22px] lg:!grid-cols-2">
          <AccountInfo loading={loading} setLoading={setLoading} />
          <CuurentAbos />
          <PaymentHistory />
          <MintHistory />
          <ConnectedWallet />
          <ConnectedExchanges />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  )
}
export default AccountTemplate
