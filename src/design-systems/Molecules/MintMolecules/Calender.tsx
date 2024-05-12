import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { LuChevronLeftCircle, LuChevronRightCircle } from 'react-icons/lu'

import Typography from 'design-systems/Atoms/Typography'
import { IMG } from 'assets/images'
import { CalendarCard } from 'design-systems/Atoms/CaleterCard'
import { CalendarIcon } from 'design-systems/Atoms/Icons'
import 'swiper/css'
import 'swiper/css/pagination'
import Button from 'design-systems/Atoms/Button'

export const Calender = () => {
  const dataDate = [
    { key: 0, label: 'Date', subtitle: '5th May 11PM UTC' },
    { key: 1, label: 'Price', subtitle: '100 ₳' },
    { key: 2, label: 'Supply', subtitle: '300' },
  ]

  const dataDate1 = [
    { key: 0, label: 'Date', subtitle: '5th May 11PM UTC' },
    { key: 1, label: 'Price', subtitle: '100 ₳' },
    { key: 2, label: 'Supply', subtitle: '6000' },
  ]
  return (
    <div className="mt-[120px] flex flex-col gap-[20px] ">
      <div className="flex items-center gap-[10px]">
        <div className="min-w-auto xsm:max-w-[80px]">
          <CalendarIcon />
        </div>
        <Typography size="subtitle-25">Mint Calendar</Typography>
      </div>
      <div className="relative">
        <Swiper
          breakpoints={{
            980: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper"
          modules={[Navigation]}
          navigation={{ enabled: true, nextEl: '.custom-next-btn', prevEl: '.custom-prev-btn' }}
          slidesPerView={1}
          spaceBetween={30}
        >
          <SwiperSlide>
            <CalendarCard dataDate={dataDate} img={IMG.shipAtom} title={'Nova-Portal'} />
          </SwiperSlide>

          <SwiperSlide>
            <CalendarCard dataDate={dataDate1} img={IMG.asteronot} title={'Nova-Nauts'} />
          </SwiperSlide>

          <SwiperSlide>
            <CalendarCard dataDate={dataDate} img={IMG.shipAtom} title={'$Nova'} />
          </SwiperSlide>
        </Swiper>
        <Button className="custom-prev-btn absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 !text-[25px] text-[#7F8489] md:!-left-[70px] md:!block">
          <LuChevronLeftCircle className="h-[44px] w-[44px]" />
        </Button>
        <Button className="custom-next-btn absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 !text-[25px] text-[#7F8489] md:!-right-[70px] md:!block">
          <LuChevronRightCircle className="h-[44px] w-[44px]" />
        </Button>
      </div>
    </div>
  )
}
