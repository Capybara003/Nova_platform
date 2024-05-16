import React, { useState } from 'react'

import infographiclogo from 'assets/images/infographic.svg'
import Button from 'design-systems/Atoms/Button'
import { SeiIcon, NFTIcons, NovaLogo } from 'design-systems/Atoms/Icons'
import IconAtom from 'design-systems/Atoms/Logo'
import { Model } from 'design-systems/Atoms/Model'
import { ModelProps } from 'design-systems/Atoms/Model/interface'
import Typography from 'design-systems/Atoms/Typography'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'

const AccountModal: React.FC<ModelProps> = ({ showModal, setShow }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }

  return (
    // Your Index modal content goes here
    <Model
      heading={
        <>
          <div className="flex justify-between">
            <div className="flex w-full flex-col items-center gap-5 md:!flex-row">
              <IconAtom
                alt={''}
                className="h-auto w-[100px] flex-shrink-0 md:!w-auto"
                height={147}
                src={infographiclogo}
                width={147}
              />
              <div className="flex flex-col gap-2 text-center md:!text-left">
                <Typography size="h3">Premium Market Analytics</Typography>
                <Typography size="paragraph">Access to all Premium Market Analitics Features</Typography>
                <Button className="w-full rounded bg-blackCardBg p-3 md:!w-fit">
                  <Typography className="font-Lexend" size="lg">
                    More Information
                  </Typography>
                </Button>
              </div>
            </div>
          </div>
        </>
      }
      isShowIcon={false}
      setShow={setShow}
      showModal={showModal}
    >
      <div className="flex w-full max-w-[924px] flex-col gap-8 font-Lexend">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex w-full items-center justify-center rounded-[10px] bg-blackCardBg md:!py-3">
            <NavTabsMolecule
              activeTab={activeTab}
              className="w-full"
              tabs={['3 Month', '6 Month', '1 Year']}
              onTabChange={handleTabChange}
            />
          </div>
          <div className="grid w-full grid-cols-1 flex-row justify-between gap-5 md:!grid-cols-3">
            <div className="flex  flex-col items-center justify-between gap-8 rounded-[10px] bg-blackCardBg px-[22px] py-[24px] text-center">
              <div className="flex flex-col items-center justify-center ">
                <SeiIcon />
                <Typography className="mt-[17px]" size="lg">
                  SEI Subscription
                </Typography>
                <Typography className="mt-[12px]" size="md">
                  Pay your Market Analytics Premium with SEI.
                </Typography>
                <Typography className="mt-[16px] text-[14px] text-black7f">Monthly SEI Costs: 15 SEI</Typography>
              </div>
              <Button className="w-full rounded-[10px] bg-button-gradient p-2 px-2">
                <Typography className="font-normal" size="md">
                  Pay 250 SEI
                </Typography>
              </Button>
            </div>
            <div className="jitems-center flex flex-col justify-between gap-8 rounded-[10px] bg-blackCardBg px-[22px] py-[24px] text-center">
              <div className="flex flex-col items-center justify-center ">
                <NovaLogo />
                <Typography className="mt-[17px]" size="lg">
                  NOVA Subscription
                </Typography>
                <Typography className="mt-[12px]" size="md">
                  Pay your Market Analytics Premium with $NOVA and get a 20% discount.
                </Typography>
                <Typography className="mt-[16px] text-[14px] text-black7f">Monthly SEI Costs: 12 SEI</Typography>
              </div>
              <Button className="w-full rounded-[10px] bg-button-gradient p-2 px-2">
                <Typography className="font-normal" size="md">
                  Pay 1.500 $NOVA
                </Typography>
              </Button>
            </div>
            <div className="jitems-center flex flex-col justify-between gap-8 rounded-[10px] bg-blackCardBg px-[22px] py-[24px] text-center">
              <div className="flex flex-col items-center justify-center ">
                <NFTIcons />
                <Typography className="mt-[17px]" size="lg">
                  NFT Subscribtion
                </Typography>
                <Typography className="mt-[12px]" size="md">
                  Get access to your Market Analytics Premium, by holding a NOVA-Naut.
                </Typography>
              </div>
              <Button className="w-full rounded-[10px] bg-button-gradient p-2 px-2">
                <Typography className="font-normal" size="md">
                  Buy on Pallet.exchange
                </Typography>
              </Button>
            </div>
            {/* <div className="flex  rounded-[10px] bg-blackCardBg p-2">
              <div className="mt-2 flex flex-col items-center justify-center gap-2">
                <IconAtom alt={''} className="flex-shrink-0" height={48} src={seiLogo} width={48} />
                <Typography size="lg">SEI Subscription</Typography>
                <Typography size="md">Pay your Market Analytics Premium with SEI.</Typography>
                <div className="mt-4 flex w-10/12">
                  <Button className="mt-5 w-full rounded-[10px] bg-button-gradient p-2 px-2">
                    <Typography className="font-normal" size="md">
                      Pay 250 SEI
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex  rounded-xs bg-blackCardBg ">
              <div className="mt-2 flex flex-col items-center justify-center gap-2">
                <IconAtom alt={''} className="flex-shrink-0" height={48} src={premiuimLogo} width={48} />
                <Typography size="lg">NOVA Subscription</Typography>
                <Typography size="md">Pay your Market Analytics Premium with $NOVA and get a 20% discount.</Typography>
                <div className="mt-4 flex w-10/12">
                  <Button className="w-full rounded-xs bg-button-gradient p-2 px-2">
                    <Typography className="font-normal " size="md">
                      Pay 1.500 $NOVA
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex rounded-xs bg-blackCardBg ">
              <div className="mt-2 flex flex-col items-center justify-center gap-2">
                <IconAtom alt={''} className="flex-shrink-0" height={49} src={NftLogo} width={50} />
                <Typography size="lg">NFT Subscribtion</Typography>
                <Typography size="md">Get access to your Market Analytics Premium, by holding a NOVA-Naut.</Typography>
                <div className="mt-4 flex w-10/12">
                  <Button className="w-full rounded-xs bg-button-gradient p-2 px-2">
                    <Typography className="font-normal " size="md">
                      Buy on Pallet.exchange
                    </Typography>
                  </Button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Model>
  )
}

export default AccountModal
