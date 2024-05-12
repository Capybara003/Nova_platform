import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Button from 'design-systems/Atoms/Button'
import { BigDownArrow, NovaLogo, PersonAvtar } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { UserBlock } from 'design-systems/Templates/AccountTemplate/interface'

const data = [
  { key: 0, label: 'NOVA' },
  { key: 1, label: 'Solutions' },
  { key: 2, label: 'Dashboard' },
]

const DashBoardHeader: React.FC<UserBlock> = ({ userData }) => {
  const router = useRouter()
  const session = useSession()
  const [index, setIndex] = useState<number>(2)
  const hasToken = localStorage.getItem('token') !== null

  const handleSignOut = () => {
    signOut()
    localStorage.clear()
  }

  const renderNavItem = (item: { key: number; label: string }) => (
    <div
      className="relative flex cursor-pointer flex-row items-center justify-center gap-2 p-2"
      key={item.key}
      onClick={() => setIndex(item.key)}
    >
      <Typography className="font-Lexend font-normal tracking-logo" size="subtitle">
        {item.label}
      </Typography>
      <BigDownArrow />
      {index === item.key && (
        <>
          <div className="maskingBorder-on-top dashboard-btn-gradient absolute left-[-10px] top-0 h-full w-[20px] bg-transparent">
            <svg
              className="h-full w-[70%]"
              fill="none"
              height="32"
              viewBox="0 0 11 32"
              width="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 1H1V31H10" stroke="url(#paint0_linear_1127_8557)" strokeLinecap="round" strokeWidth="2" />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1127_8557"
                  x1="5.5"
                  x2="5.5"
                  y1="1"
                  y2="31"
                >
                  <stop stopColor="#C517D1" />
                  <stop offset="1" stopColor="#2592D9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="maskingBorder-on-top dashboard-btn-gradient absolute right-[-10px] top-0 h-full w-[20px] bg-transparent">
            <svg
              className="h-full w-[70%]"
              fill="none"
              height="32"
              viewBox="0 0 11 32"
              width="11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1H10V31H1" stroke="url(#paint0_linear_1127_8558)" strokeLinecap="round" strokeWidth="2" />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_1127_8558"
                  x1="5.5"
                  x2="5.5"
                  y1="1"
                  y2="31"
                >
                  <stop stopColor="#C517D1" />
                  <stop offset="1" stopColor="#2592D9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </>
      )}
    </div>
  )

  return (
    <>
      <div className="flex flex-wrap items-center justify-between p-4 font-Lexend">
        <div className="ml-1 flex flex-wrap items-center gap-[163px]">
          <div className="flex flex-row items-center space-x-2">
            <NovaLogo />
            <div className="flex flex-col">
              <Typography className="font-Lexend font-normal tracking-logo" size="h4">
                NOVA
              </Typography>
              <Typography className="font-Lexend tracking-logo1" size="body">
                SOLUTIONS
              </Typography>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[68px]">{data.map(renderNavItem)}</div>
        </div>
        <div className="flex items-center space-x-4">
          {session.status === 'authenticated' || hasToken ? (
            <Button className="" onClick={handleSignOut}>
              {userData.profilePic && userData.profilePic !== '' ? (
                <div>
                  <Image
                    alt="Avatar"
                    className="inline-block h-[50px] w-[50px] rounded-full ring-2 ring-whiteE8 "
                    height={50}
                    src={userData.profilePic}
                    width={50}
                  />
                </div>
              ) : (
                <>
                  <div className="h-12 w-12">
                    <PersonAvtar height={'64px'} width={'64px'} />
                  </div>
                </>
              )}
            </Button>
          ) : (
            <Button
              className="min-w-[126px] rounded-[5px] bg-button-gradient px-[22px] py-[10px] font-Lexend"
              onClick={() => router.push('/login')}
            >
              <Typography>Log In</Typography>
            </Button>
          )}
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-[#C517D126] to-[#2592D926]"></div>
    </>
  )
}

export default DashBoardHeader
