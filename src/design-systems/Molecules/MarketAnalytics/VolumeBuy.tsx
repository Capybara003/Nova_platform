/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Image from 'next/image'

import NavTabsMolecule from '../NavTabs/NavTabsMolecule'
import NegativeChart from '../NegativeChart'
import CustomSingleBar from '../CustomSingleBar'

import { InfoIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { IMG } from 'assets/images'
export const VolumeBuy = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }

  return (
    <div className="mt-5 grid grid-cols-1 gap-5 !rounded-md bg-blackCardBg lg:grid-cols-2">
      <div className="rounded-lg p-4">
        <div className="flex flex-row flex-wrap justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap items-center gap-2">
              <Typography className="text-left font-Lexend font-medium text-[#DBDBDB] drop-shadow" size="subtitle-25">
                Volume / Buy Sell
              </Typography>
              <div>
                <InfoIcons />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <div className="mt-4 flex w-full flex-col items-center justify-between gap-6 md:flex-row">
            <div className="w-full">
              <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                Wallets
              </Typography>
              <ul>
                {Array(6)
                  .fill('')
                  .map((item, index) => {
                    return (
                      <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                        <Image className="h-6 w-6" alt="marker" src={IMG.clm1} />
                        <CustomSingleBar
                          downValue={`${index + 1 * Math.floor(Math.random() * 100)}`}
                          upValue={`${index + 1 * Math.floor(Math.random() * 100)}`}
                        />
                      </li>
                    )
                  })}
              </ul>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
              <div>
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                  Buy Volume
                </Typography>
                <ul>
                  {Array(6)
                    .fill('12.000.000 ₳')
                    .map((item, index) => {
                      return (
                        <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                          <Typography>{item}</Typography>
                        </li>
                      )
                    })}
                </ul>
              </div>

              <div>
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                  Sell Volume
                </Typography>
                <ul>
                  {Array(6)
                    .fill('12.000.000 ₳')
                    .map((item, index) => {
                      return (
                        <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                          <Typography>{item}</Typography>
                        </li>
                      )
                    })}
                </ul>
              </div>

              <div>
                <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">Net</Typography>
                <ul>
                  {Array(6)
                    .fill('12.000.000 ₳')
                    .map((item, index) => {
                      return (
                        <li className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                          <Typography>{item}</Typography>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-2 border-[#3f3e46]" />

        <div className="mt-2 flex flex-col justify-between gap-6 md:flex-row">
          <div className="mt-4 flex w-full flex-col items-center justify-between gap-6 md:flex-row">
            <div className="mt-2 flex w-full items-center justify-start gap-1 text-md text-[#DBDBDB]">
              <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">Total</Typography>
              <CustomSingleBar
                downValue={`${Math.floor(Math.random() * 100)}`}
                upValue={`${Math.floor(Math.random() * 100)}`}
              />
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-6 md:flex-row">
              <div className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]">
                <Typography>12.000.000 ₳</Typography>
              </div>
              <div className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]">
                <Typography>12.000.000 ₳</Typography>
              </div>
              <div className="mt-2 flex items-center justify-start gap-1 text-md text-[#DBDBDB]">
                <Typography>12.000.000 ₳</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg p-4">
        <div className="flex flex-row flex-wrap justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap items-center gap-2">
              <Typography className="text-left font-Lexend font-medium text-[#DBDBDB] drop-shadow" size="subtitle-25">
                Buy Volume / Sell Volume
              </Typography>
              <div>
                <InfoIcons />
              </div>
            </div>
            <div className="mt-2 flex w-full flex-row items-center gap-2">
              <Typography className="text-left font-medium" size="lg">
                5.463 ₳
              </Typography>
              <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                +225,53%
              </Typography>
            </div>
            <Typography className="text-left font-light text-black7f" size="small">
              01.02.2022
            </Typography>
          </div>
          <div className="!w-full xsm:!w-auto">
            <NavTabsMolecule
              activeTab={activeTab}
              outerClassName="!h-fit"
              tabs={['D', 'W', 'M']}
              onTabChange={tab => {
                handleTabChange(tab)
              }}
            />
          </div>
        </div>

        <div>
          <NegativeChart
            height={200}
            series={[
              {
                name: 'Series A',
                data: [44, 55, 41, 64, 22, 43, 21],
              },
              {
                name: 'Series B',
                data: [0, -23, -20, -8, -13, -27, -33],
              },
            ]}
            width={800}
            xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
          />
        </div>
      </div>
    </div>
  )
}
