'use client'
import { useState } from 'react'

import backgroundImage from '../../../assets/images/mint-bg-2.png'

import { Launchpad } from 'design-systems/Molecules/MintMolecules/Launchpad'
import { Calender } from 'design-systems/Molecules/MintMolecules/Calender'
import { HowItWork } from 'design-systems/Molecules/MintMolecules/HowItWork'
import { FeatureIcons, HeartHandIcons, SemiConductorChip } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Card } from 'design-systems/Atoms/Card'
import { AdvLounchData, FeatureData } from 'design-systems/data/data'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import { CreateNFTcollectionTab } from 'design-systems/Molecules/MintMolecules/CreateNFTcollectionTab'

const MintTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="overflow-x-hidden font-Lexend text-grayDB">
      <div
        // className=" h-full w-full  bg-cover bg-fixed bg-no-repeat"
        className="h-full w-full bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage.src})`, backgroundSize: '100%' }}
      >
        <div className="h-[94vh] w-screen  !bg-black-gradient-cover"></div>
        <div className="">
          <div className="flex flex-col gap-[20px] bg-[#0C0A14] px-[19px] md:px-[80px] lg:px-[140px]">
            <Launchpad />
            <Calender />
            <HowItWork />
            <div className="flex flex-col gap-[22px] rounded-[24px] bg-black225_05 p-[22px]">
              <div className="flex items-center gap-[10px] ">
                <div className="min-w-auto   xsm:max-w-[80px]">
                  <FeatureIcons />
                </div>
                <Typography size="subtitle-25">Features</Typography>
              </div>
              <div className="grid !grid-cols-1 gap-[19px] xsm:!grid-cols-2 lg:!grid-cols-3 xm:!grid-cols-4 xl:!grid-cols-5">
                {FeatureData.map((item, key) => (
                  <div key={key}>
                    <Card
                      className={'min-h-[303px] !bg-[#1d1b25] md:!w-full'}
                      icon={item.icon}
                      label={item.label}
                      subtitle={item.subtitle}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[120px] flex flex-col gap-[32px] rounded-[24px] bg-black225_05 p-[22px]">
              <div className="flex flex-col items-start justify-between gap-[22px] md:!flex-row md:!items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="min-w-auto   xsm:max-w-[80px]">
                    <HeartHandIcons />
                  </div>
                  <Typography className="text-left md:!text-center" size="subtitle-25">
                    Create your own NFT Collection or Token
                  </Typography>
                </div>
                <div className="flex w-full items-center md:!w-fit">
                  <NavTabsMolecule
                    activeTab={activeTab}
                    className="w-full"
                    tabs={['Nft', 'Token']}
                    onTabChange={handleTabChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[22px] text-left">
                <Typography size="lg">We offer for other projects: </Typography>
                <CreateNFTcollectionTab activeTab={activeTab} />
              </div>
            </div>
            <div className="mb-[22px] flex flex-col gap-[16px] rounded-[24px] bg-black225_05 p-[22px]">
              <div className="flex items-center gap-[10px]">
                <div className="min-w-auto   xsm:max-w-[80px]">
                  <SemiConductorChip />
                </div>
                <Typography className="text-left  md:!text-center" size="subtitle-25">
                  Advantages of the NOVA-Launchpad:
                </Typography>
              </div>
              <div className="grid !grid-cols-1 gap-[22px] md:!grid-cols-2 lg:!grid-cols-4  xl:!grid-cols-5">
                {AdvLounchData.map((item, key) => (
                  <div key={key}>
                    <Card
                      className={'min-h-[320px] !bg-[#1d1b25]'}
                      icon={item.icons}
                      label={item.label}
                      subtitle={item.subtitle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MintTemplate
