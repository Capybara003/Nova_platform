/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import TokenChart from '../TokenChart'
import TokenChatBox from '../NftChatBox'

import { IMG } from 'assets/images'
import Typography from 'design-systems/Atoms/Typography'
import { tokenDetailData } from 'design-systems/data/data'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import useWindowWidth from 'hooks/useWindowWidth'

const TokenInfoCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const width = useWindowWidth()

  useEffect(() => {
    setActiveTab(0)
  }, [width])

  return (
    <div className="flex items-center justify-end rounded-e-[28px] rounded-bl-[24px] rounded-tl-[2px] xm:bg-[linear-gradient(135deg,_rgba(197,23,209,1)_0%,_rgba(37,146,217,1)_100%)]">
      <div className="h-full w-full rounded-e-[24px] rounded-bl-[24px] rounded-tl-[2px] bg-[#181620] p-6 xm:w-[99.4%]">
        <div className="flex items-start justify-between gap-2">
          <div className="h-[135px] w-[135px] rounded-md">
            <Image alt="nft" height={200} src={IMG.webumpNft} width={200} />
          </div>
          <div className="flex-1">
            <div className="flex gap-2">
              <Typography className="text-left font-Lexend text-md sm:text-paragraph md:text-subtitle" size="paragraph">
                WeBump
              </Typography>
              <Image alt="save icon" src={IMG.save} />
            </div>

            <div className="mt-4 flex items-center justify-start gap-2">
              <Image alt="share icon" className="h-5 w-5" height={800} src={IMG.discordNft} width={800} />
              <Image alt="share icon" className="h-5 w-5" height={800} src={IMG.xbgblack} width={800} />
              <Image alt="share icon" className="h-5 w-5" height={800} src={IMG.nftImage44} width={800} />
              <Image alt="share icon" className="h-5 w-5" height={800} src={IMG.global} width={800} />
            </div>

            <div className="mt-4 flex items-center justify-start">
              <NavTabsMolecule
                activeTab={activeTab}
                className="w-full justify-center text-sm md:text-body xm:text-paragraph"
                tabs={['Info', 'Trade']}
                onTabChange={number => {
                  return
                }}
              />
            </div>
          </div>
        </div>

        <div className="my-4 flex items-center justify-center xm:!hidden">
          <NavTabsMolecule
            activeTab={activeTab}
            className="w-full justify-center text-sm md:text-body xm:text-paragraph"
            tabs={['Information', 'Chart', 'Chat']}
            onTabChange={number => setActiveTab(number)}
          />
        </div>

        {activeTab === 0 && (
          <div className="mt-4">
            <ul>
              {tokenDetailData.map(item => (
                <li className="my-[2px]" key={item.title}>
                  <div className="flex items-center justify-between font-Lexend">
                    <Typography className="text-[14px]" variant="regular">
                      {item.title}
                    </Typography>
                    <Typography className="font-Inter font-light">{item.value}</Typography>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 1 && <TokenChart />}

        {activeTab === 2 && <TokenChatBox />}
      </div>
    </div>
  )
}

export default TokenInfoCard
