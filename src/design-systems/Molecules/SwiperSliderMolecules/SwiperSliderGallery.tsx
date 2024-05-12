/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { Autoplay, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperInterface } from 'swiper/types'

export const SwiperSliderGallery = ({ data }: any) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [swiper, setSwiper] = useState<SwiperInterface>()

  return (
    <div className="h-full w-full items-center justify-center gap-[22px] xsm:!flex">
      <div className="!w-4/4 xsm:!w-3/4 md:!w-[85%]">
        <Swiper
          className="h-full w-full"
          loop={true}
          modules={[Thumbs, Autoplay]}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setSwiper}
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.img}>
              <div className="h-full w-full">
                <Image alt="IMG" className="h-full w-full rounded-[10px]" height={667} src={item.img} width={667} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="!w-4/4 relative !hidden py-9 xsm:!flex xsm:!w-1/4 md:!w-[15%]">
        <Swiper
          className="mySwiper3 !h-[100px] w-full xsm:!h-[300px]"
          direction={'vertical'}
          loop={true}
          modules={[Thumbs]}
          slidesPerView={3}
          spaceBetween={10}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.img}>
              <div className="h-full w-full">
                <Image alt="IMG" className="h-full w-full rounded-[10px]" height={500} src={item.img} width={500} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="absolute left-1/2 top-0 z-10 -translate-x-1/2" onClick={() => swiper?.slidePrev()}>
          <BsChevronUp className="text-subtitle" />
        </button>
        <button className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2" onClick={() => swiper?.slideNext()}>
          <BsChevronDown className="text-subtitle" />
        </button>
      </div>
      <div className="!w-4/4 relative !flex py-9 xsm:!hidden xsm:!w-1/4 md:!w-[15%]">
        <Swiper
          className="mySwiper3 !h-[100px] w-full xsm:!h-[300px]"
          direction={'horizontal'}
          loop={true}
          modules={[Thumbs]}
          slidesPerView={3}
          spaceBetween={10}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
        >
          {data.map((item: any) => (
            <SwiperSlide key={item.img}>
              <div className="h-full w-full">
                <Image alt="IMG" className="h-full w-full rounded-[10px]" height={500} src={item.img} width={500} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute !left-1 !top-1/2  z-10 -translate-x-1/2 !-rotate-90 xsm:!left-1/2 xsm:!top-0 xsm:!rotate-0"
          onClick={() => swiper?.slidePrev()}
        >
          <BsChevronUp className="text-subtitle" />
        </button>
        <button
          className="absolute right-0 top-1/2 z-10  !-rotate-90 xsm:bottom-0 xsm:left-1/2 xsm:-translate-x-1/2  xsm:!rotate-0"
          onClick={() => swiper?.slideNext()}
        >
          <BsChevronDown className="text-subtitle" />
        </button>
      </div>
    </div>
  )
}
