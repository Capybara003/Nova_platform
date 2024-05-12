/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import NftChart from '../NftChart'
import NftChatBox from '../NftChatBox'
import { NFTProps } from '../interface'

import { IMG } from 'assets/images'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import useWindowWidth from 'hooks/useWindowWidth'
import { nftDetailData } from 'design-systems/data/data'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

const NftInfoCard: React.FC<NFTProps> = ({ holdingData, isLoadingAssetDetails }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [bookmark, setBookmark] = useState<boolean>(false)
  const width = useWindowWidth()

  useEffect(() => {
    setActiveTab(0)
  }, [width])

  return (
    <>
      <div className="flex h-full items-center justify-end rounded-e-[28px] rounded-bl-[24px] rounded-tl-[2px]  from-blue to-primary pl-[2px] xm:bg-gradient-to-t ">
        <div className="h-full w-full rounded-e-[24px] rounded-bl-[24px] rounded-tl-[2px] bg-[#181620] p-6 ">
          <div className="flex items-start justify-between gap-2">
            <div className="h-[135px] w-[135px] rounded-md">
              <Image alt="nft" height={200} src={IMG.monkeyNft} width={200} />
            </div>
            <div className="flex-1">
              <div className="flex gap-2">
                <Typography
                  className="text-left font-Lexend text-md sm:text-paragraph md:text-subtitle"
                  size="paragraph"
                >
                  $Society
                </Typography>

                <button onClick={() => setBookmark(!bookmark)}>{bookmark ? <FaBookmark /> : <FaRegBookmark />}</button>
              </div>

              <Typography className="mt-2 flex gap-8 font-Inter text-md font-light md:text-[16px]">
                <span>Floor:</span>
                <span>4.399 ₳</span>
              </Typography>

              <div className="mt-4 flex items-center justify-start gap-2">
                <Image alt="share icon" className="h-5 w-5" height={800} src={IMG.discordNft} width={800} />
                <Image alt="share icon" className="h-5 w-5" height={800} src={IMG.xbgblack} width={800} />
                <Image alt="share icon" className="h-5 w-5" height={800} src={IMG.nftImage44} width={800} />
                <Image alt="share icon" className="h-5 w-5" height={800} src={IMG.global} width={800} />
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
                {nftDetailData.map(item => (
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

          {activeTab === 1 && <NftChart />}

          {activeTab === 2 && <NftChatBox />}
        </div>
      </div>
    </>
  )
}

export default NftInfoCard
