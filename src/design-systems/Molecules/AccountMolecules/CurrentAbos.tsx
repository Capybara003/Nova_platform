import React, { useState } from 'react'

import AccountModal from '../ModalMolecules/AccountModal'

import infographiclogo from 'assets/images/infographic.svg'
import Button from 'design-systems/Atoms/Button'
import { PortfolioIcons } from 'design-systems/Atoms/Icons'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'
import { GradintDivDark } from 'design-systems/Atoms/GradintDivDark'

const CuurentAbos: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setModalOpen(true)
  }
  return (
    <div className="h-full">
      <div className="flex h-full flex-col content-between justify-between gap-[32px] rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px]">
        <Typography className="text-left font-normal" size="subtitle">
          Current Abos
        </Typography>
        <div className=" grid h-full grid-cols-1 flex-row  justify-center gap-[22px] xsm:!grid-cols-2 ">
          <GradintDivDark className="!bg-[#24222b]" classNameOuterDiv="!w-full !p-[2px]">
            <div className=" flex h-full flex-col items-center justify-between  gap-2">
              <div className="flex flex-col items-center justify-between  gap-2">
                <IconAtom alt={''} className="flex-shrink-0" height={100} src={infographiclogo} width={80} />
                <Typography className="mt-5 font-medium text-[#DBDBDB]" size="lg">
                  Market Analytics
                </Typography>
                <Typography size="md">Basic</Typography>
              </div>
              <div className="mt-4 flex w-full">
                <Button className="h-[46px] w-full rounded-xs bg-button-gradient p-[12px]" onClick={openModal}>
                  <Typography className="font-normal" size="md">
                    Upgrade
                  </Typography>
                </Button>
              </div>
            </div>
          </GradintDivDark>
          <GradintDivDark className="!bg-[#24222b]" classNameOuterDiv="!w-full !p-[2px]">
            <div className=" flex h-full flex-col items-center justify-between gap-2">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-[80px]">
                  <PortfolioIcons />
                </div>
                <Typography className="mt-5 font-medium text-[#DBDBDB]" size="lg">
                  Portfolio Analytics
                </Typography>
                <Typography size="md">Premium</Typography>
              </div>
              <div className="mt-4 flex w-full">
                <Button className="h-[46px] w-full rounded-xs bg-blackCardBg p-[12px]">
                  <Typography className="font-normal text-secondary-300" size="md">
                    Expire: 15.09.2024
                  </Typography>
                </Button>
              </div>
            </div>
          </GradintDivDark>
        </div>
      </div>
      {/* <div className="fixed left-1/4 top-32 w-1/2 rounded-sm border-l-2 border-[#C517D1] bg-[#0C0A14]"> */}
      <AccountModal setShow={setModalOpen} showModal={modalOpen} />
      {/* </div> */}
    </div>
  )
}

export default CuurentAbos
