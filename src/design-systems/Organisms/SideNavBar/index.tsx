/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { SidebarData } from 'design-systems/data/data'

const SideNavbar: React.FC = () => {
  const router = usePathname()
  return (
    <>
      {/* Div display under SideNavbar */}
      <div className="h-full w-[72px]"></div>

      {/* Desktop SideNavBar */}
      <div className="group fixed !z-10 h-full transform font-Lexend ">
        <div className="fixed mt-[88px] !flex h-full w-[72px] transform !flex-col !gap-[16px] gap-y-3 overflow-hidden  text-ellipsis whitespace-nowrap bg-blackBg   pt-[20px] duration-500 ease-in-out group-hover:left-0 group-hover:inline-block group-hover:h-screen group-hover:w-[252px]">
          {SidebarData.map((item, key) => {
            return (
              <React.Fragment key={key}>
                {router === item.path ? (
                  <Link
                    className={` flex w-[72px] transform cursor-pointer items-center justify-start gap-3 group-hover:w-[252px]`}
                    href={item.path}
                    onClick={() => localStorage.setItem('label', item.label)}
                  >
                    <div className="h-[24px] w-1 rounded-r-[8px] bg-gradient-to-t from-primary to-blue "></div>
                    <div
                      className={` flex items-center gap-x-2 rounded-full p-[12px] hover:bg-black225_05 ${
                        router === item.path && 'bg-black225_05'
                      } `}
                    >
                      <div>{item.activeIcon}</div>
                      <div className="hidden text-[18px] font-normal leading-[normal] text-blue group-hover:flex group-hover:transform group-hover:duration-500 group-hover:ease-in-out">
                        {item.label}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link
                    className={` ml-4 flex w-max  cursor-pointer items-center gap-x-2  rounded-full p-[12px]  hover:bg-black225_05  ${
                      router === item.path && 'bg-black225_05'
                    } `}
                    href={item.path}
                    onClick={() => localStorage.setItem('label', item.label)}
                  >
                    <div className="opacity-[0.25]">{item.icon}</div>
                    <div className="hidden text-[18px]  font-normal leading-[normal] opacity-[0.25] group-hover:flex">
                      {item.label}
                    </div>
                  </Link>
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SideNavbar
