'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'

import NavTabsMolecule from '../NavTabs/NavTabsMolecule'

import { IMG } from 'assets/images'
import Typography from 'design-systems/Atoms/Typography'
// import { BookMarkEmpty, BotIcons, TwitterIcons } from 'design-systems/Atoms/Icons'

const SingleCollectionMolecules: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [bookmark, setBookmark] = useState<boolean>(false)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="!col-span-3 w-full rounded-[24px] bg-blackCardBg p-[22px] text-[#DBDBDB] lg:!col-span-1 ">
      <div className="flex gap-3">
        <div className="h-full w-full">
          <Image alt={'PersonIMG'} height={130} src={IMG.PersonProfile} width={130} />
        </div>
        <div className="flex flex-col items-start justify-start gap-3">
          <Typography className="flex flex-row items-center gap-3" size="subtitle-25">
            <Typography>$Society</Typography>
            <button className="text-paragraph" onClick={() => setBookmark(!bookmark)}>
              {bookmark ? <FaBookmark className="text-green" /> : <FaRegBookmark />}
            </button>
          </Typography>
          <div className="flex items-center justify-center gap-3">
            {/* <BotIcons /> */}
            <Image alt="icon" className="h-6 w-6" src={IMG.discordNft} />
            <Image alt="icon" className="h-6 w-6" src={IMG.global} />
            <Image alt="icon" className="h-6 w-6" src={IMG.xbgblack} />
          </div>
          <div className="w-full xsm:overflow-y-auto md:w-auto">
            <NavTabsMolecule activeTab={activeTab} tabs={['Info', 'Trade']} onTabChange={handleTabChange} />
          </div>
        </div>
      </div>
      <div className="mb-2 mt-2 flex w-full flex-col justify-between gap-[6px]">
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Supply:</Typography>
          <Typography>7.001</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Collection MC:</Typography>
          <Typography>15.000.000 ₳</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>FD Collection MC :</Typography>
          <Typography>35.000.000 ₳</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Project MC:</Typography>
          <Typography>35.000.000 ₳</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>FD Project MC:</Typography>
          <Typography>55.000.000 ₳</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Collection Volume:</Typography>
          <Typography>38.000.000 ₳</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Project Volume:</Typography>
          <Typography>38.000.000 ₳</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>% Pooled $Society:</Typography>
          <Typography>5%</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Pooled ADA: </Typography>
          <Typography>138.000.000 ₳</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Pooled $Society: </Typography>
          <Typography>1.138.000.000</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Total TX: </Typography>
          <Typography>5000</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Pool Created:</Typography>
          <Typography>03/24/2022 11:12</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Sales: </Typography>
          <Typography>5000</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Avg. Sale</Typography>
          <Typography>2.500 ₳</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Buyers: </Typography>
          <Typography>5000</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Seller: </Typography>
          <Typography>3500</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Diamond Hands:</Typography>
          <Typography>2500</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>Holder:</Typography>
          <Typography>2249/35%</Typography>
        </Typography>
        <Typography className="flex w-full  justify-between gap-[22px]" size="lg">
          <Typography>1 ADA:</Typography>
          <Typography>5.000 Society</Typography>
        </Typography>
      </div>
    </div>
  )
}
export default SingleCollectionMolecules
