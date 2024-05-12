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
  series?: number[]
}

const DonutWithTableChart: React.FC<DonutWithTableChartProps> = ({
  heading,
  chartCenterContent,
  columnHeadingFirst,
  columnHeadingSecond,
  totalHeading,
  isBg = true,
  series,
}) => {
  return (
    <div className={`rounded-lg p-4 ${isBg ? 'bg-blackCardBg' : ''}`}>
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

      <div className="flex flex-col xxsm:!flex-row">
        <DynamicDonutChart
          centerContent={chartCenterContent}
          colors={['#5A3FFF', '#2592D9', '#1ED6FF', '#F466FE', '#C517D1', '#6B0090']}
          height={300}
          labels={['0-5K ', '5K-25k', '25K-100K', '100K-250K', '250K-1M', '1M+']}
          series={series || [22, 20, 20, 22, 32, 51]}
          width={300}
        />
        <div className="w-full flex-1">
          <div className="mt-4 flex items-center justify-between">
            <div>
              <Typography className="mb-1 text-left font-Inter text-small uppercase text-[rgba(255,255,255,0.6)]">
                {columnHeadingFirst ?? 'Heading'}
              </Typography>
              <ul className="flex flex-col gap-2">
                {['0-5K ₳', '5K-25k ₳', '25K-100K ₳', '100K-250K ₳', '250K-1M ₳', '1M+ ₳'].map(item => {
                  return (
                    <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={item}>
                      <Image className="h-6 w-6" alt="marker" src={IMG.clm1} />
                      <Typography>{item}</Typography>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div>
              <Typography className="mb-1 text-left font-Inter text-small uppercase text-[#ffffff99]">
                {columnHeadingSecond ?? 'Heading'}
              </Typography>
              <ul className="flex flex-col gap-2">
                {series
                  ? series.map((item, index) => {
                      return (
                        <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                          <Typography>{item}</Typography>
                        </li>
                      )
                    })
                  : Array(6)
                      .fill('33')
                      .map((item, index) => (
                        <li className="flex items-center justify-start gap-1 text-md text-[#DBDBDB]" key={index}>
                          <Typography>{item}</Typography>
                        </li>
                      ))}
              </ul>
            </div>
          </div>
          <hr className="mt-3 bg-[#ffffffcc]" />
          <div className="mt-4 flex items-center justify-between">
            <div>
              <Typography className="mb-1 text-left font-Inter text-small capitalize text-[rgba(255,255,255,0.6)]">
                {totalHeading ?? 'Total'}
              </Typography>
            </div>
            <div>
              <Typography className="mb-1 text-left font-Inter text-small capitalize text-[rgba(255,255,255,0.6)]">
                {series ? series.reduce((a, b) => a + b, 0) : 738}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonutWithTableChart
