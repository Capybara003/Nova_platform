/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useChain } from '@cosmos-kit/react'

import ConnectedWalletTable from '../AccountTable/ConnectedWalletTable'
import { ConnectedModel } from '../ModalMolecules/ConnectedModel'

import editIcon from 'assets/images/tabler_edit.svg'
import Button from 'design-systems/Atoms/Button'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'
import { useDataSelector } from 'lib/redux/store'
import { useHolding } from 'hooks/apis/useHolding'
import { walletData, Wallet } from 'lib/redux/slices/walletSlice'

const ConnectedWallet: React.FC = () => {
  const dispatch = useDispatch()
  const { connect } = useChain('sei')
  const { wallets } = useDataSelector('walletSlice')

  const [open, setOpen] = useState(false)

  const { walletConnect, refetchWallet } = useHolding()

  useMemo(() => refetchWallet(), [refetchWallet])

  useMemo(() => {
    if (walletConnect) {
      const mergedArray = wallets.concat(walletConnect).reduce((acc: Wallet[], obj) => {
        const existingObj = acc.find(item => item.id === obj.id)
        if (!existingObj) {
          acc.push({ ...obj, isActive: true })
        }
        return acc
      }, [])
      dispatch(walletData(mergedArray))
    }
  }, [walletConnect])

  const header = [
    { name: 'Address', key: 'Address', isInfo: false, isSort: false, width: '25%' },
    { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '12.5%' },
    { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: false, width: '16.5%' },
    { name: 'Trade Volume', key: 'TradeVolume', isInfo: false, isSort: false, width: '19%' },
    { name: 'NFTs', key: 'NFTs', isInfo: false, isSort: false, width: '12.5%' },
    { name: 'Tokens', key: 'Tokens', isInfo: false, isSort: false, width: '12.5%' },
    { name: '', key: '', isInfo: false, isSort: false, width: '9%' },
  ]

  return (
    <div className="h-full ">
      <div
        className="flex flex-col gap-[21px] rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px]"
        style={{ height: 'inherit' }}
      >
        <div className="flex flex-col flex-wrap items-center justify-between gap-3 xsm:!flex-row">
          <Typography className="text-left font-normal" size="subtitle">
            Connected Wallets
          </Typography>

          <div className="hidden w-full flex-col items-center gap-3 xsm:!w-auto xsm:!flex-row xxsm:!flex">
            <Button className="h-[40px] w-full rounded-[6px] bg-gradient-pink px-[3px]  xsm:w-auto" onClick={connect}>
              <div className="flex h-[34px] w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink px-[30px] py-[12px] xsm:!w-auto">
                <Typography size="lg">Connect Wallet</Typography>
              </div>
            </Button>
            <Button
              className="flex h-[40px] w-full flex-row items-center justify-center gap-[10px] rounded-[6px] bg-blackCardBg p-[20px] xsm:!w-auto"
              onClick={() => setOpen(true)}
            >
              <Typography size="lg">Edit</Typography>
              <IconAtom alt={''} className="flex-shrink-0" height={24} src={editIcon} width={24} />
            </Button>
          </div>
        </div>
        <div className="h-full max-h-[300px] w-full overflow-y-auto rounded-xs pe-[12px]">
          <ConnectedWalletTable data={wallets} header={header} />
        </div>

        <div className="flex w-full flex-col items-center gap-3 xxsm:!hidden">
          <Button className="h-[40px] w-full rounded-[6px] bg-gradient-pink px-[3px]  xsm:w-auto" onClick={connect}>
            <div className="flex h-[34px] w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink px-[30px] py-[12px] xsm:!w-auto">
              <Typography size="lg">Connect Wallet</Typography>
            </div>
          </Button>
          <Button
            className="flex h-[40px] w-full flex-row items-center justify-center gap-[10px] rounded-[6px] bg-blackCardBg p-[20px]"
            onClick={() => setOpen(true)}
          >
            <Typography size="lg">Edit</Typography>
            <IconAtom alt={''} className="flex-shrink-0" height={24} src={editIcon} width={24} />
          </Button>
        </div>
      </div>
      <ConnectedModel data={wallets} header={header} setShow={setOpen} showModal={open} />
    </div>
  )
}

export default ConnectedWallet
