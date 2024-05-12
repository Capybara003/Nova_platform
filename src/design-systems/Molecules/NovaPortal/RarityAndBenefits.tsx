import { useState } from 'react'
import Image from 'next/image'

import { IMG } from 'assets/images'
import Typography from 'design-systems/Atoms/Typography'
import { BenefitsData, RarityData } from 'design-systems/data/data'

export const RarityAndBenefits = () => {
  const [activeTab, setActiveTab] = useState<number>(0)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="flex flex-col  gap-[12px] lg:!flex-row">
      <div className="!grid h-full !grid-cols-1 !flex-col gap-[12px] sm:!grid-cols-2 xsm:!grid-cols-2 md:!grid-cols-4 lg:!flex">
        {RarityData.map((item, key) => (
          <div
            className={`${
              activeTab === key ? ' bg-gradient-to-t from-primary to-blue ' : 'bg-black225_05'
            } min-h-[133px] w-full cursor-pointer rounded-l-[3px] rounded-r-[12px] pl-[6px] lg:max-w-[300px]`}
            key={key}
            onClick={() => handleTabChange(item.key)}
          >
            <div
              className={` ${
                activeTab === key ? 'opacity-100' : 'opacity-40'
              }  flex h-full min-h-[133px] w-full  items-center  rounded-r-[12px] bg-bg25 lg:max-w-[300px] lg:px-[22px]`}
            >
              <div className="ml-[5%] flex items-center gap-[10px]">
                <div>{item.icon}</div>
                <Typography className={`font-semibold`} size="lg" style={{ color: `${item.activeColor}` }}>
                  {item.title}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        {activeTab === 0 && (
          <div className="flex flex-col gap-[12px] md:!flex-row">
            <div className="w-full">
              <Image
                alt={'IMG'}
                className="max-h-[568px] w-full rounded-[13px]"
                height={568}
                src={IMG.shipAtom}
                width={568}
              />
            </div>
            <div className="grid !grid-cols-1 gap-[12px] xsm:!grid-cols-2">
              {BenefitsData.map((item, key) => (
                <div
                  className="flex min-h-[133px] items-center gap-[10px] rounded-[12px] bg-black225_05 p-[12px]"
                  key={key}
                >
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <div>{item.icon}</div>
                    <Typography size="lg">{item.label}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="flex flex-col gap-[12px] md:!flex-row">
            <div className="w-full">
              <Image
                alt={'IMG'}
                className="max-h-[568px] w-full rounded-[13px]"
                height={568}
                src={IMG.shipAtom}
                width={568}
              />
            </div>
            <div className="grid !grid-cols-1 gap-[12px] xsm:!grid-cols-2">
              {BenefitsData.map((item, key) => (
                <div
                  className="flex min-h-[133px] items-center gap-[10px] rounded-[12px] bg-black225_05 p-[12px]"
                  key={key}
                >
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <div>{item.icon}</div>
                    <Typography size="lg">{item.label}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="flex flex-col gap-[12px] md:!flex-row">
            <div className="w-full">
              <Image
                alt={'IMG'}
                className="max-h-[568px] w-full rounded-[13px]"
                height={568}
                src={IMG.shipAtom}
                width={568}
              />
            </div>
            <div className="grid !grid-cols-1 gap-[12px] xsm:!grid-cols-2">
              {BenefitsData.map((item, key) => (
                <div
                  className="flex min-h-[133px] items-center gap-[10px] rounded-[12px] bg-black225_05 p-[12px]"
                  key={key}
                >
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <div>{item.icon}</div>
                    <Typography size="lg">{item.label}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 3 && (
          <div className="flex flex-col gap-[12px] md:!flex-row">
            <div className="w-full">
              <Image
                alt={'IMG'}
                className="max-h-[568px] w-full rounded-[13px]"
                height={568}
                src={IMG.shipAtom}
                width={568}
              />
            </div>
            <div className="grid !grid-cols-1 gap-[12px] xsm:!grid-cols-2">
              {BenefitsData.map((item, key) => (
                <div
                  className="flex min-h-[133px] items-center gap-[10px] rounded-[12px] bg-black225_05 p-[12px]"
                  key={key}
                >
                  <div className="flex flex-wrap items-center gap-[10px]">
                    <div>{item.icon}</div>
                    <Typography size="lg">{item.label}</Typography>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
