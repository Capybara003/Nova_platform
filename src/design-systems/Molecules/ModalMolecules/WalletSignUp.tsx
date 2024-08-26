/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Eth from '@ledgerhq/hw-app-eth'
import TransportWebHID from '@ledgerhq/hw-transport-webhid'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { ChainWalletBase, WalletModalProps } from 'cosmos-kit'
import { createThirdwebClient } from 'thirdweb'
import { createWallet, injectedProvider } from 'thirdweb/wallets'

import { IMGtextSkeleton } from '../Skeletan/IMGtextSkeleton'

import { IMG } from 'assets/images'
import closeIcon from 'assets/images/close.svg'
import Button from 'design-systems/Atoms/Button'
import { BackIcon, FolderIcon, PlusOutlinedBig } from 'design-systems/Atoms/Icons'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import Line from 'design-systems/Atoms/Line'
import IconAtom from 'design-systems/Atoms/Logo'
import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import Typography from 'design-systems/Atoms/Typography'
import { DesktopSupportDataWalet, MobileSupportDataWalet } from 'design-systems/data/data'
import { useWallet } from 'hooks/apis/useWallet'
import { useDataSelector } from 'lib/redux/store'
import { walletData } from 'lib/redux/slices/walletSlice'

export async function getLedgerAddress(path: string): Promise<string> {
  const transport = await TransportWebHID.create()
  const eth = new Eth(transport)

  const result = await eth.getAddress(path, false, true)
  const address = result.address

  await transport.close()
  return address
}

const WalletSignUp = ({ isOpen, setOpen, walletRepo }: WalletModalProps) => {
  const dispatch = useDispatch()
  const { wallets } = useDataSelector('walletSlice')

  const [ShowWallet, setShowWallet] = useState<boolean>(false)
  const [mannulvalue, setMannulValue] = useState('')
  const [desktopWallets, setDesktopWallets] = useState<Array<ChainWalletBase>>([])
  const [mobileWallets, setMobileWallets] = useState<Array<ChainWalletBase>>([])
  const [hardwareWallets, setHardwareWallets] = useState<Array<ChainWalletBase>>([])

  const { postWalletConnect } = useWallet()

  useEffect(() => {
    if (walletRepo && isOpen) {
      const { wallets } = walletRepo
      const desktop = wallets.filter(
        wallet =>
          wallet.walletInfo.mode === 'extension' &&
          wallets.filter(wallet1 => wallet1.walletName === wallet.walletName).length < 2
      )
      const mobile = wallets.filter(wallet => wallet.walletInfo.mode === 'wallet-connect')
      const hardware = wallets.filter(wallet => wallet.walletInfo.mode === 'ledger')
      setDesktopWallets(desktop)
      setMobileWallets(mobile)
      setHardwareWallets(hardware)
    }
  }, [isOpen])

  const handleWalletConnect = (wallet: ChainWalletBase) => {
    wallet
      .connect()
      .then(async () => {
        console.log(wallet)
        if (wallet.walletStatus === 'Connected') {
          const localUserData = localStorage.getItem('id')
          if (localUserData && localUserData !== undefined && localUserData !== null) {
            const response = await postWalletConnect({
              walletAddress: wallet.address,
              walletName: wallet.username,
              ownerId: Number(localUserData),
            })
            if (response.success) {
              if (wallets.find(item => item.id === response.wallet.id) === undefined) {
                dispatch(walletData([...wallets, response.wallet]))
                toast.success('Wallet connected', { position: toast.POSITION.TOP_RIGHT })
              } else {
                toast.success('Wallet already connected', { position: toast.POSITION.TOP_RIGHT })
              }
            }
          }
        } else {
          toast.error('Connect Failed', { position: toast.POSITION.TOP_RIGHT })
        }
      })
      .catch(() => toast.error('Connect Failed', { position: toast.POSITION.TOP_RIGHT }))
      .finally(() => setOpen(false))
  }

  const handleRabbyWalletConnect = async () => {
    const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || ''

    const client = createThirdwebClient({ clientId })
    const rabby = createWallet('io.rabby')

    if (injectedProvider('io.rabby')) {
      rabby
        .connect({ client })
        .then(async account => {
          if (account.address) {
            const localUserData = localStorage.getItem('id')
            if (localUserData && localUserData !== undefined && localUserData !== null) {
              const response = await postWalletConnect({
                walletAddress: account.address,
                walletName: 'rabby',
                ownerId: Number(localUserData),
              })
              if (response.success) {
                if (wallets.find(item => item.id === response.wallet.id) === undefined) {
                  dispatch(walletData([...wallets, response.wallet]))
                  toast.success('Wallet connected', { position: toast.POSITION.TOP_RIGHT })
                } else {
                  toast.success('Wallet already connected', { position: toast.POSITION.TOP_RIGHT })
                }
              }
            }
          } else {
            toast.error('Connect Failed', { position: toast.POSITION.TOP_RIGHT })
          }
        })
        .catch(() => toast.error('Connect Failed', { position: toast.POSITION.TOP_RIGHT }))
        .finally(() => setOpen(false))
    }
  }

  return (
    // Your Index modal content goes here
    <Model heading="Connect Wallet" setShow={setOpen} showModal={isOpen}>
      <div className="flex min-w-[457px] flex-col gap-4">
        <div className="max-h-[608px] w-full overflow-auto rounded-[10px]">
          {ShowWallet && (
            <Button
              className="mb-[12px] flex w-full cursor-pointer items-center gap-[16px] rounded-[10px] bg-black225_05 p-3 text-left"
              onClick={() => setShowWallet(!ShowWallet)}
            >
              <BackIcon />
              <Typography className="!font-medium" size="paragraph">
                Back To The Smart Connection
              </Typography>
            </Button>
          )}
          <Button
            className="flex w-full cursor-pointer items-center gap-[16px] rounded-[10px] bg-black225_05 p-3 text-left"
            onClick={() => setShowWallet(true)}
          >
            <FolderIcon />
            <Typography className="!font-medium" size="paragraph">
              Manually
            </Typography>
          </Button>
          {ShowWallet ? (
            <div className="mt-[12px] flex flex-col items-center justify-center gap-[12px] rounded-[10px] bg-black225_05 p-3">
              <Typography className="font-medium" size="lg">
                Enter your wallet address to connect
              </Typography>
              <InputAtom
                className="w-full rounded-xs  bg-black225_05 px-[22px] py-3"
                placeholder={'Enter...'}
                type="text"
                value={mannulvalue}
                onChange={e => setMannulValue(e.target.value)}
              />
              <Button className=" w-full rounded-[6px] bg-gradient-pink px-[3px] pb-[2px] pt-[3px]">
                <div className="  w-full  flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[10px] font-Lexend">
                  <Typography size="md">Connect Wallet</Typography>
                </div>
              </Button>
            </div>
          ) : (
            <>
              <Line className="!my-3" />
              <Typography className="!font-medium" size="paragraph">
                Wallet Supporting Mobile
              </Typography>
              <div className="mt-3 flex flex-col gap-3">
                {mobileWallets.map(wallet => (
                  <Button
                    className="flex w-full cursor-pointer items-center gap-[16px] rounded-[10px] bg-black225_05 p-3 text-left"
                    key={wallet.walletInfo.name}
                    onClick={() => handleWalletConnect(wallet)}
                  >
                    {typeof wallet.walletInfo.logo === 'object' ? (
                      <div className="relative h-[50px] w-[50px]">
                        <Image
                          alt="IMG"
                          className="absolute left-0 top-0"
                          height={48}
                          src={wallet.walletInfo.logo.major}
                          width={48}
                        />
                        <Image
                          alt="IMG"
                          className="border-white absolute bottom-0 right-0 rounded-full"
                          height={20}
                          src={wallet.walletInfo.logo.minor}
                          width={20}
                        />
                      </div>
                    ) : (
                      <Image alt="IMG" height={50} src={wallet.walletInfo.logo || ''} width={50} />
                    )}
                    <Typography className="!font-medium" size="paragraph">
                      {wallet.walletInfo.prettyName}
                    </Typography>
                  </Button>
                ))}
              </div>
              <Line className="!my-3" />
              <Typography className="!font-medium" size="paragraph">
                Desktop Only
              </Typography>
              <div className="mt-3 flex flex-col gap-3">
                {desktopWallets.map(wallet => (
                  <Button
                    className="flex w-full cursor-pointer items-center gap-[16px] rounded-[10px] bg-black225_05 p-3 text-left"
                    key={wallet.walletInfo.name}
                    onClick={() => handleWalletConnect(wallet)}
                  >
                    {typeof wallet.walletInfo.logo === 'object' ? (
                      <div className="relative h-[50px] w-[50px]">
                        <Image
                          alt="IMG"
                          className="absolute left-0 top-0"
                          height={48}
                          src={wallet.walletInfo.logo.major}
                          width={48}
                        />
                        <Image
                          alt="IMG"
                          className="border-white absolute bottom-0 right-0 rounded-full"
                          height={20}
                          src={wallet.walletInfo.logo.minor}
                          width={20}
                        />
                      </div>
                    ) : (
                      <Image alt="IMG" height={50} src={wallet.walletInfo.logo || ''} width={50} />
                    )}
                    <Typography className="!font-medium" size="paragraph">
                      {wallet.walletInfo.prettyName}
                    </Typography>
                  </Button>
                ))}
                <Button
                  className="flex w-full cursor-pointer items-center gap-[16px] rounded-[10px] bg-black225_05 p-3 text-left"
                  key={'rabby'}
                  onClick={handleRabbyWalletConnect}
                >
                  <Image alt="IMG" height={50} src={IMG.Rabby} width={50} />
                  <Typography className="!font-medium" size="paragraph">
                    {'Rabby Wallet'}
                  </Typography>
                </Button>
              </div>
              <Line className="!my-3" />
              <Typography className="!font-medium" size="paragraph">
                {`USB Connect (Hardware Wallet)`}
              </Typography>
              <div className="mt-3 flex flex-col gap-3">
                {hardwareWallets.map(wallet => (
                  <Button
                    className="flex w-full cursor-pointer items-center gap-[16px] rounded-[10px] bg-black225_05 p-3 text-left"
                    key={wallet.walletInfo.name}
                    onClick={() => handleWalletConnect(wallet)}
                  >
                    {typeof wallet.walletInfo.logo === 'object' ? (
                      <div className="relative h-[50px] w-[50px]">
                        <Image
                          alt="IMG"
                          className="absolute left-0 top-0"
                          height={48}
                          src={wallet.walletInfo.logo.major}
                          width={48}
                        />
                        <Image
                          alt="IMG"
                          className="border-white absolute bottom-0 right-0 rounded-full"
                          height={20}
                          src={wallet.walletInfo.logo.minor}
                          width={20}
                        />
                      </div>
                    ) : (
                      <Image alt="IMG" height={50} src={wallet.walletInfo.logo || ''} width={50} />
                    )}
                    <Typography className="!font-medium" size="paragraph">
                      {wallet.walletInfo.prettyName}
                    </Typography>
                  </Button>
                ))}
              </div>
            </>
          )}
        </div>
        {/* <div className="flex flex-col gap-4">
          {WalletLoginData.map((item, key) => (
            <Button
              className="flex cursor-pointer items-center gap-3 rounded-[10px] bg-black225_05 p-3 text-left"
              key={key}
              onClick={() => enableWallet(item.Label)}
            >
              <div className="rounded-full bg-black225_05 p-3">
                <Image alt="IMGlogo" height={30} src={item.img} width={30} />
              </div>
              <Typography className="font-medium" size="subtitle">
                {item.Label}
              </Typography>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Line />
          <Typography>Or</Typography>
          <Line />
        </div>
        <Button className="w-full rounded bg-button-gradient p-4 font-medium">
          <Typography size="subtitle">Add Manual Wallet</Typography>
        </Button> */}
      </div>
    </Model>
  )
}

export default WalletSignUp
