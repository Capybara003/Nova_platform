import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import DynamicDonutChart from '../DynamicDonutChart'

import { GreenDot, RedDot } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { FisData } from 'design-systems/data/data'
import useWindowWidth from 'hooks/useWindowWidth'

export const FairDis = () => {
  const width = useWindowWidth()
  return (
    <div className="grid grid-cols-1 gap-[22px] text-left font-Lexend md:!grid-cols-3">
      <div className="col-span-1 h-[600px] rounded-[10px] bg-[#1d1b25] p-[22px] md:!col-span-2">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart
            data={FisData}
            height={300}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            width={500}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#00C68A" stackId="a" />
            <Bar dataKey="uv" fill="#D11717" radius={[5, 5, 0, 0]} stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="col-span-1 h-full rounded-[10px] bg-[#1d1b25] p-[22px]">
        <div className="flex flex-col gap-[12px]">
          <Typography size="subtitle-25">Test Scenario:</Typography>
          <div className="flex flex-wrap gap-[22px] text-[#E8E1E1]">
            <Typography className="font-l flex" size="lg">
              <Typography>Supply:</Typography>
              <Typography>10</Typography>
            </Typography>
            <Typography className="flex" size="lg">
              <Typography>Ordered:</Typography>
              <Typography>10</Typography>
            </Typography>
            <Typography className="flex" size="lg">
              <Typography>Minter:</Typography>
              <Typography>10</Typography>
            </Typography>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[22px] ">
          <div className="my-2 flex h-[250px] items-center justify-center">
            <DynamicDonutChart
              centerContent={<></>}
              colors={['#D11717', '#00C68A']}
              height={width > 375 ? 300 : 200}
              labels={['0-5K ', '5K-25k']}
              series={[22, 20]}
              width={width > 375 ? 300 : 200}
            />
          </div>

          <div className="flex gap-[8px]">
            <div>
              <GreenDot />
            </div>
            <Typography className="flex flex-col gap-[12px]">
              <Typography className="font-Lexend" size="lg">
                Confirmed 66,66%
              </Typography>
              <Typography className="font-Inter text-whiteE8" size="body">
                Comfirmed order volume which every user will get of his ordered allocation.
              </Typography>
            </Typography>
          </div>
          <div className="flex gap-[8px]">
            <div>
              <RedDot />
            </div>
            <Typography className="flex flex-col gap-[12px]">
              <Typography className="font-Lexend" size="lg">
                Refund 33,34%
              </Typography>
              <Typography className="font-Inter text-whiteE8" size="body">
                Partly refunded order volume, based on fair distribution.
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
