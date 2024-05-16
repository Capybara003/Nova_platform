/* eslint-disable @typescript-eslint/no-unused-vars */
import { useWeb3Modal } from '@web3modal/wagmi/react'
import React, { useState } from 'react'

import Web3Modal from '../../../context/WagmiModalProvider'
import ConnectedExchangeTable from '../AccountTable/ConnectedExchangeTable'
import { ConnectedExchangeModel } from '../ModalMolecules/ConnectedExchangeModel'

import { data } from 'app/account/utils'
import editIcon from 'assets/images/tabler_edit.svg'
import Button from 'design-systems/Atoms/Button'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'

const ConnectedExchanges: React.FC = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const { open } = useWeb3Modal()
  const header = [
    { name: 'Address', key: 'Address', isInfo: false, isSort: false, width: '26.2%' },
    { name: 'Exchange', key: 'Exchange', isInfo: false, isSort: false, width: '16.2%' },
    { name: 'SEI Transferred', key: 'Transferred', isInfo: false, isSort: false, width: '16.2%' },
    { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: false, width: '16.2%' },
    { name: 'Trade Volume', key: 'TradeVolume', isInfo: false, isSort: false, width: '16.2%' },
    { name: '', key: '', isInfo: false, isSort: false, width: '9%' },
  ]
  return (
    <>
      <Web3Modal>
        <div className="h-full ">
          <div className="flex max-h-full flex-col gap-[21px] rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px]">
            <div className="flex flex-col flex-wrap items-center justify-between gap-3 xsm:!flex-row">
              <Typography className="text-left font-normal" size="subtitle">
                Connect Exchange
              </Typography>

              <div className="hidden w-full flex-col items-center gap-3 xsm:!w-auto xsm:!flex-row xxsm:!flex">
                <Button
                  className="h-[40px] w-full rounded-[6px] bg-gradient-pink px-[3px]  xsm:w-auto"
                  onClick={() => open()}
                >
                  <div className="flex h-[34px] w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink px-[30px] py-[12px] xsm:!w-auto">
                    <Typography size="lg">Connect Exchange</Typography>
                  </div>
                </Button>
                <Button
                  className="flex h-[40px] w-full flex-row items-center justify-center gap-[10px] rounded-[6px] bg-blackCardBg p-[20px] xsm:!w-auto"
                  onClick={() => setOpenPopup(true)}
                >
                  <Typography size="lg">Edit</Typography>
                  <IconAtom alt={''} className="flex-shrink-0" height={24} src={editIcon} width={24} />
                </Button>
              </div>
            </div>
            <div className="max-h-[300px] w-full overflow-y-auto rounded-xs pe-[12px]">
              <ConnectedExchangeTable data={data} header={header} />
            </div>
            <div className="flex w-full flex-col items-center gap-3 xsm:!w-auto xxsm:!hidden">
              <Button
                className="h-[40px] w-full rounded-[6px] bg-gradient-pink px-[3px]  xsm:w-auto"
                onClick={() => open()}
              >
                <div className="flex h-[34px] w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink px-[30px] py-[12px] xsm:!w-auto">
                  <Typography size="lg">Connect Exchange</Typography>
                </div>
              </Button>
              <Button
                className="flex h-[40px] w-full flex-row items-center justify-center gap-[10px] rounded-[6px] bg-blackCardBg p-[20px]"
                onClick={() => setOpenPopup(true)}
              >
                <Typography size="lg">Edit</Typography>
                <IconAtom alt={''} className="flex-shrink-0" height={24} src={editIcon} width={24} />
              </Button>
            </div>
          </div>
        </div>
      </Web3Modal>
      <ConnectedExchangeModel data={data} header={header} setShow={setOpenPopup} showModal={openPopup} />
    </>
  )
}

export default ConnectedExchanges
