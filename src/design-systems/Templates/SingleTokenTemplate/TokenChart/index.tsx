'use client'

import React from 'react'

import { YellowDot } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import DynamicLineGraph from 'design-systems/Molecules/DynamicLineGraph'

const graphData = [
  {
    month: '15.01.2023',
    price: 2400,
  },
  {
    month: '15.02.2023',
    price: 2600,
  },
  {
    month: '15.03.2023',
    price: 4568,
  },
  {
    month: '15.04.2023',
    price: 3908,
  },
  {
    month: '15.05.2023',
    price: 4800,
  },
  {
    month: '15.06.2023',
    price: 3800,
  },
  {
    month: '15.07.2023',
    price: 4300,
  },
  {
    month: '15.08.2023',
    price: 3200,
  },
  {
    month: '15.09.2023',
    price: 2200,
  },
  {
    month: '15.10.2023',
    price: 4200,
  },
  {
    month: '15.11.2023',
    price: 2900,
  },
  {
    month: '15.12.2023',
    price: 3600,
  },
]

const TokenChart: React.FC = () => {
  return (
    <div className="col-span-2 h-full w-full !rounded-md md:w-[92%] lg:w-full xm:max-h-[665px] xm:bg-blackCardBg xm:p-2">
      <div className="flex h-full w-full flex-col gap-8 p-4">
        <div className="flex flex-wrap items-center justify-between gap-12 rounded-[8px] bg-blackCardBg p-[16px]">
          <div className="flex flex-wrap items-center justify-start gap-10">
            <div className="flex flex-col gap-1 text-left font-Lexend">
              <Typography className=" flex items-center gap-2" size="paragraph">
                <YellowDot />
                <Typography>Price</Typography>
              </Typography>
              <Typography className="font-normal" size="subtitle">
                5.463 ₳
              </Typography>
              <Typography className=" text-success-500" size="paragraph">
                +225,53%
              </Typography>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-1 text-left font-Lexend">
            <Typography className="flex items-center justify-end gap-2 text-grayDB opacity-[0.5]" size="paragraph">
              Your Position
            </Typography>
            <Typography className="font-normal" size="subtitle">
              5.463 ₳
            </Typography>
            <Typography className=" text-success-500" size="paragraph">
              +51,50%
            </Typography>
          </div>
        </div>
        <div className="h-[300px] xm:h-full">
          <DynamicLineGraph
            data={graphData}
            height={'100%'}
            lineKeys={[
              {
                key: 'price',
                strokeColor: '#CE9136',
              },
            ]}
            lineWidth={2}
            width="100%"
            xAxisLabelKey="month"
          />
        </div>
      </div>
    </div>
  )
}

export default TokenChart
