/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Navigation, Pagination, Zoom } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import NavTabsMolecule from '../NavTabs/NavTabsMolecule'

import { IMG } from 'assets/images'
import Button from 'design-systems/Atoms/Button'
import { HelmatIcons80 } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

export const NovaNaut = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeThumb, setActiveThumb] = useState<any>(null)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  const images: any = [IMG.Sunglasses, IMG.asteronot]
  return (
    <div className="grid !grid-cols-1 justify-between gap-[40px] rounded-[24px] bg-black225_05 p-[22px] md:!grid-cols-3 md:p-[56px]">
      <div className="col-span-1 flex items-center md:col-span-2">
        <div className="flex flex-col gap-[32px]">
          <div className="flex items-center gap-[10px]">
            <div className="min-w-auto   xsm:max-w-[80px]">
              <HelmatIcons80 />
            </div>
            <Typography className=" text-grayDB " size="subtitle-25">
              NOVA-Naut
            </Typography>
          </div>
          <Typography className="font-Inter text-grayDB" size="lg">
            Lore 123 The NOVA-Nauts are the Main Collection behind the brand NOVA Solutions. They are designed to full
            fill your passion for digital art and combine it with even greater utility. The whole Ecosystem and all
            Solutions are directly connected to the NOVA-Nauts. Mint a NOVA-Naut, and be a Part of NOVA Solutions.
          </Typography>
          <Button className="mt-[34px] max-w-[395px] rounded-[6px] bg-gradient-to-r from-primary to-secondary-25 px-[30px] py-[12px]">
            <Typography>More Information</Typography>
          </Button>
        </div>
      </div>
      <div className=" flex flex-col gap-[22px]">
        <div className="flex max-h-[406.965px] w-full">
          {/* <Image alt="IMG" className="max-h-[406.965px] w-full" src={IMG.Sunglasses} /> */}
          <Swiper
            className="mySwiper"
            modules={[Zoom, Navigation, Pagination]}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            style={
              {
                // '--swiper-navigation-color': '#fff',
                // '--swiper-pagination-color': '#fff',
              }
            }
            zoom={true}
          >
            {images.map((image: any, key: any) => (
              <>
                <SwiperSlide>
                  <div className="swiper-zoom-container">
                    <Image
                      alt={''}
                      className="!rounded-[10px]"
                      draggable={false}
                      src={image}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
        <div className=" flex justify-center">
          <NavTabsMolecule
            activeTab={activeTab}
            tabs={['Full NOVA-Naut', 'PFP Version']}
            onTabChange={handleTabChange}
          />
        </div>
      </div>
    </div>
  )
}
