/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import Image from 'next/image'

import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'
import OnSelect from 'design-systems/Molecules/OnSelect'
import SearchMolecule from 'design-systems/Molecules/Search/SearchMolecule'
import { IMG } from 'assets/images'
import { DownArrow, PersonAvtar, PlusOutlined } from 'design-systems/Atoms/Icons'
import { ADAdata, SidebarData } from 'design-systems/data/data'
import WalletSignUp from 'design-systems/Molecules/ModalMolecules/WalletSignUp'
import { ModuleName, setCrypto } from 'lib/redux/slices/navToggleSlice'
import { cryptoProps } from 'lib/redux/slices/navToggleSlice/interface'

export const TopNavbar: React.FC<HeaderProps> = ({ open, setOpen, setModelName, hide, userData }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const openModal = () => {
    setModalOpen(true)
  }
  const [activeTab, setActiveTab] = useState<number>(0)
  const [API, setAPI] = useState(null)
  const pathname = usePathname()

  const session = useSession()
  const hasToken = localStorage.getItem('token') !== null
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const handleSelectADA = (selectedOption: cryptoProps) => {
    dispatch(setCrypto(selectedOption))
  }

  const handleSignOut = () => {
    signOut()
    // Remove the 'token' item from localStorage
    localStorage.clear()
  }
  const enableWallet = async () => {
    try {
      // const newAPI = await window.cardano.eternl.enable();
      // const newAPI = await window.cardano.nami.enable();
      if (typeof window !== undefined) {
        // debugger;
        const newAPI = await window.cardano.vespr.enable()
        toast.success('Wallet enabled', {
          position: toast.POSITION.TOP_RIGHT,
        })
        setAPI(newAPI)
      }
      // console.log('Wallet enabled', stakeAddress);
    } catch (err: any) {
      toast.error('Wallet not enabled', {
        position: toast.POSITION.TOP_RIGHT,
      })
      console.error(err, '>>>>>>>>>>>')
    }
  }
  const handleSelect = (item: any) => {
    setOpen(!open), dispatch(ModuleName(item.label)), setModelName?.(item.label)
    localStorage.setItem('label', item.label)
  }
  return (
    <div className="mt-[70px] inline-block h-screen w-full overflow-auto bg-blackBg px-[19px] py-[24px] ">
      <div className="grid gap-y-4">
        {pathname !== '/account' && !hide && (
          <div className="flex h-fit flex-row flex-wrap justify-between gap-4 xsm:flex-col md:!h-auto">
            <div className="!h-auto w-full flex-1 sm:!w-auto">
              <NavTabsMolecule
                activeTab={activeTab}
                className="h-full w-full !text-[12px] sm:!justify-between"
                tabs={['NFT', 'Token', 'All']}
                onTabChange={handleTabChange}
              />
            </div>
            <OnSelect
              className="h-[41px] w-full !text-[12px] sm:!h-full sm:!w-auto"
              imageHeight={0}
              imageSrc={''}
              imageWidth={0}
              options={['1 day', '7 days', '30 days', '90 days', '1 year', 'All']}
              onSelect={() => {}}
            />
          </div>
        )}
        {!hide && <SearchMolecule />}
        {(pathname === '/NOVA-Naut' ||
          pathname === '/mint' ||
          pathname === '/NOVA-Naut/NOVA-Naut-id' ||
          pathname === '/NOVA-portal' ||
          pathname === '/NOVA-portal/NOVA-portal-id') && (
          <Button
            className="flex h-[52px] w-full rounded-[6px]  bg-gradint-dark-pink p-[3px] font-Inter"
            onClick={() => openModal()}
          >
            <div className="flex h-full items-center justify-center gap-[10px] rounded-[6px] bg-[#181620] px-4">
              <div>
                <PlusOutlined />
              </div>
              <Typography>Wallet Connect</Typography>
            </div>
          </Button>
        )}
        <div className="grid grid-cols-2 items-center justify-center gap-4">
          {!hide && (
            <div className="">
              <OnSelect
                className="font-Poppins h-full"
                imageHeight={24}
                imageSrc={IMG.logo}
                imageWidth={24}
                // options={ADAdata}
                optionIMG={ADAdata}
                onSelect={() => {
                  handleSelectADA
                }}
              />
            </div>
          )}
          <div className="flex h-full items-center justify-center ">
            {session.status === 'authenticated' || hasToken ? (
              <Button
                className="flex h-full w-full items-center justify-center rounded-[6px] bg-black225_05 "
                onClick={handleSignOut}
              >
                {userData.profilePic && userData.profilePic !== '' ? (
                  <div className="flex h-[50px] w-[50px] items-center justify-center ">
                    <Image
                      alt="Avatar"
                      className="inline-block h-[24px] w-[24px] rounded-full ring-2 ring-whiteE8 "
                      height={24}
                      src={userData.profilePic}
                      width={24}
                    />
                  </div>
                ) : (
                  <div className="h-[40px] w-[40px] p-1 md:!h-[54px] md:!w-[54px]">
                    <Image className="h-full w-full" alt="profile" src={IMG.profile} />
                  </div>
                )}
              </Button>
            ) : (
              <Button
                className="font-Poppins h-[52px] w-[126px] rounded bg-button-gradient"
                onClick={() => router.push('/login')}
                // onClick={connectWallet}
                //   onClick={() => connect(
                //     'Nova',
                //     onConnect
                // )}
                // onClick={() => enableWallet()}
                // onClick={() => handleClickUSB()}
              >
                Log In
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          {SidebarData.map((item, key) => {
            return (
              <div className="grid " key={key}>
                {pathname === item.path ? (
                  <Link
                    className={` flex transform cursor-pointer items-center gap-x-2 rounded-full  duration-500 ease-in-out ${
                      pathname === item.path && 'text-blue'
                    } `}
                    href={item.path}
                    onClick={() => handleSelect(item)}
                  >
                    <div className="rounded-full bg-black225_05 p-2">{item.activeIcon}</div>
                    <div className="text-[20px] font-normal">{item.label}</div>
                  </Link>
                ) : (
                  <Link
                    className={` flex transform cursor-pointer items-center gap-x-2 rounded-full  duration-500 ease-in-out ${
                      pathname === item.path && 'text-blue'
                    } `}
                    href={item.path}
                    key={key}
                    onClick={() => handleSelect(item)}
                  >
                    <div className="rounded-full p-2 opacity-[0.25]">{item.icon}</div>
                    <div className="text-[20px] font-normal opacity-[0.25]">{item.label}</div>
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <WalletSignUp setShow={setModalOpen} showModal={modalOpen} />
    </div>
  )
}
