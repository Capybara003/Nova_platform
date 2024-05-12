/* eslint-disable no-console */

'use client'
import React, { useEffect, useState } from 'react'

import backgroundImage from 'assets/images/Dashboard-bg.png'
import DashboardIndex from 'design-systems/Molecules/DashboardMolecules'
import DashBoardHeader from 'design-systems/Molecules/DashboardMolecules/DashboardHeader'
import { DashboardTopNav } from 'design-systems/Organisms/DashboardTopNav'
import Footer from 'design-systems/Organisms/Footer'
import MobileHeader from 'design-systems/Organisms/MobileHeader.tsx'

const DashBoardTemplate: React.FC = () => {
  // const ID: string | null = typeof window !== 'undefined' ? localStorage.getItem('id') : null
  // const hasToken = localStorage.getItem('token')
  // const { isLoadingUser, User } = useUser(ID, hasToken)
  const [open, setOpen] = useState<boolean>(false)
  const [userData, setUserData] = useState({})
  const localUserData = localStorage.getItem('UserData')
  useEffect(() => {
    try {
      if (localUserData && localUserData !== undefined && localUserData !== null) {
        const parsedUserData = JSON?.parse(localUserData)
        setUserData(parsedUserData)
      }
    } catch (error) {
      console.error('Error parsing UserData:', error)
      // Handle the error (e.g., set default values or show a message to the user)
    }
  }, [localUserData])

  return (
    <div
      className={`${
        open ? 'h-screen overflow-hidden' : 'xsm:overflow-hidden'
      } flex h-full w-full flex-col  bg-cover bg-fixed bg-no-repeat  font-Lexend xsm:h-screen xsm:bg-center`}
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="fixed  top-0 !hidden w-full bg-[#000] md:!flex md:!flex-col">
        <DashBoardHeader userData={userData} />
      </div>
      <div className="!flex md:!hidden">
        <MobileHeader open={open} setOpen={setOpen} />
      </div>
      {open && (
        <div className="flex md:hidden">
          <DashboardTopNav open={open} setOpen={setOpen} />
        </div>
      )}
      <DashboardIndex />
      <div className=" w-full">
        <Footer />
      </div>
    </div>
  )
}

export default DashBoardTemplate
