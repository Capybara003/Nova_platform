import React from 'react'
import Image from 'next/image'

import { InfoIcons } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import DynamicDonutChart from 'design-systems/Molecules/DynamicDonutChart'
import { IMG } from 'assets/images'

interface DonutWithTableChartProps {
  heading?: string
  chartCenterContent?: React.ReactNode
  columnHeadingFirst?: string
  columnHeadingSecond?: string
  totalHeading?: string
  isBg?: boolean
  className?: string
  totalValue?: string
  tableLeftList?: { icon: React.ReactNode; title: string }[]
  tableRightList?: string[]
}

const DonutWithTableChart: React.FC<DonutWithTableChartProps> = ({
  heading,
  chartCenterContent,
  columnHeadingFirst,
  columnHeadingSecond,
  totalHeading,
  isBg = true,
  className,
  totalValue,
  tableLeftList,
}) => {
  return (
    <div className={` ${className} rounded-[24px] p-5 ${isBg ? 'bg-[#1e1c26]' : ''}`}>
      <div className="flex flex-row flex-wrap justify-between gap-3">
        <div className="flex flex-col">
          {heading && (
            <div className="flex flex-row flex-wrap items-center gap-2">
              <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                {heading ?? ''}
              </Typography>
              <div>
                <InfoIcons />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex !flex-col items-center justify-center xxsm:!flex-row">
        <DynamicDonutChart
          centerContent={chartCenterContent}
          colors={['#5A3FFF', '#2592D9', '#1ED6FF', '#F466FE', '#C517D1', '#6B0090']}
          height={300}
          labels={['0-5K ', '5K-25k', '25K-100K', '100K-250K', '250K-1M', '1M+']}
          series={[22, 20, 20, 22, 32, 51]}
          width={300}
        />
        <div className="w-full flex-1">
          <div className="mt-4 flex items-center justify-between">
            <div>
              <Typography className="mb-1 text-left font-Inter text-md uppercase text-[rgba(255,255,255,0.6)]">
                {columnHeadingFirst ?? 'Heading'}
              </Typography>
              <ul className="flex flex-col gap-y-2">
                {tableLeftList
                  ? tableLeftList.map(item => {
                      return (
                        <li className="flex items-center justify-start gap-4 text-md text-[#DBDBDB]" key={item.title}>
                          {item.icon}
                          <Typography>{item.title}</Typography>
                        </li>
                      )
                    })
                  : [
                      { key: 0, label: '0-5K ₳', icons: IMG.clm1 },
                      { key: 1, label: '5K-25K ₳', icons: IMG.clm2 },
                      { key: 2, label: '25K-100K ₳', icons: IMG.clm3 },
                      { key: 3, label: '100K-250K ₳', icons: IMG.clm4 },
                      { key: 4, label: '250K-1M ₳', icons: IMG.clm5 },
                      { key: 5, label: '1M+ ₳', icons: IMG.clm6 },
                    ].map(item => {
                      return (
                        <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={item.label}>
                          <Image alt="marker" className="h-5 w-5" src={item.icons} />
                          <Typography>{item.label}</Typography>
                        </li>
                      )
                    })}
              </ul>
            </div>

            <div>
              <Typography className="mb-1 text-left font-Inter text-md uppercase text-[#ffffff99]">
                {columnHeadingSecond ?? 'Heading'}
              </Typography>
              <ul className="flex flex-col gap-y-2">
                {Array(6)
                  .fill('12% / 600')
                  .map((item, index) => {
                    return (
                      <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                        <Typography>{item}</Typography>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
          <hr className="mt-3 bg-[#ffffffcc]" />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <Typography className="mb-1 text-left font-Inter text-md capitalize text-[rgba(255,255,255,0.6)]">
                {totalHeading ?? 'Total'}
              </Typography>
            </div>
            <div>
              <Typography className="mb-1 text-left font-Inter text-md capitalize text-[rgba(255,255,255,0.6)]">
                {totalValue ? `${totalValue}` : 738}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonutWithTableChart
