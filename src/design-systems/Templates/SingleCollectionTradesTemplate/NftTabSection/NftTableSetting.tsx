import Image from 'next/image'
import React, { useState } from 'react'

import { IMG } from 'assets/images'
import { Model } from 'design-systems/Atoms/Model'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'

interface NftTableSettingProps {
  isOpen: boolean
  handleOpen: (value: boolean) => void
  activeTab: number
}
const NftTableSetting: React.FC<NftTableSettingProps> = ({ isOpen, handleOpen, activeTab }) => {
  const [activeValue, setActiveValue] = useState<number>(0)

  return (
    <Model className="w-[600px]" heading="Collection Trades Settings" setShow={handleOpen} showModal={isOpen}>
      <div className="mt-5 flex flex-col justify-center gap-5 lg:!h-[550px] lg:!w-[700px] lg:!flex-row">
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-24 rounded-lg bg-blackCardBg p-2 lg:p-0">
          <div className="flex flex-col items-center justify-center gap-5">
            <Typography className="font-Lexend text-subtitle" size="paragraph">
              Value Showcased
            </Typography>
            <Typography className="font-Inter text-[14px] text-[#7F8489]">
              Choose which value to showcase in the table
            </Typography>
            <div>
              <NavTabsMolecule
                activeTab={activeValue}
                tabs={['Amount', '%']}
                onTabChange={number => setActiveValue(number)}
              />
            </div>
          </div>

          {activeTab === 3 && (
            <div className="flex flex-col items-center justify-center gap-5">
              <Typography className="font-Lexend text-subtitle" size="paragraph">
                Group
              </Typography>
              <Typography className="font-Inter text-[14px] text-[#7F8489]">Choose your preferred grouping</Typography>
              <NavTabsMolecule
                activeTab={activeValue}
                tabs={['Wallets', 'Accounts']}
                onTabChange={number => setActiveValue(number)}
              />
            </div>
          )}
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-5 rounded-lg bg-blackCardBg p-2 lg:p-0">
          <Typography className="font-Lexend text-subtitle" size="paragraph">
            Wallet
          </Typography>
          <Typography className="font-Inter text-[14px] text-[#7F8489]">Choose your wallet value</Typography>

          <ul>
            <li>
              <div className="flex gap-2">
                <input className="h-4 w-4" id="" name="" type="checkbox" />
                All
              </div>
            </li>

            {[
              { key: 0, label: '0-5K ₳', icons: IMG.clm1 },
              { key: 1, label: '5K-25K ₳', icons: IMG.clm2 },
              { key: 2, label: '25K-100K ₳', icons: IMG.clm3 },
              { key: 3, label: '100K-250K ₳', icons: IMG.clm4 },
              { key: 4, label: '250K-1M ₳', icons: IMG.clm5 },
              { key: 5, label: '1M+ ₳', icons: IMG.clm6 },
            ].map(item => {
              return (
                <li className="my-4 flex items-center justify-start gap-2 text-md text-[#DBDBDB]" key={item.label}>
                  <input className="h-4 w-4 checked:bg-red" id="" name="" type="checkbox" />
                  <Image
                    alt="marker"
                    className="aspect-square h-8 w-8 object-contain"
                    height={100}
                    src={item.icons}
                    width={100}
                  />
                  <Typography>{item.label}</Typography>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Model>
  )
}

export default NftTableSetting
