import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

import { FisData } from 'design-systems/data/data'
import Typography from 'design-systems/Atoms/Typography'
import { GreenDot, RedDot, YellowDot } from 'design-systems/Atoms/Icons'

export const Fair = () => {
  return (
    <div className="grid grid-cols-1 gap-[22px] text-left font-Lexend lg:grid-cols-3 ">
      <div className="h-[600px] rounded-[24px] bg-[#1d1b25] p-[22px] md:col-span-2">
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
            <Bar dataKey="pv" fill="#82ca9d" stackId="a" />
            <Bar dataKey="uv" fill="#D11717" radius={[5, 5, 0, 0]} stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex h-full flex-col justify-between gap-[22px] text-whiteE8">
        <div className="flex h-full flex-col justify-between rounded-[24px] bg-[#1d1b25] p-[22px] text-left">
          <div className="flex flex-col gap-[12px]">
            <Typography size="subtitle-25">Test Scenario:</Typography>
            <div className="flex flex-wrap gap-[22px]">
              <Typography className="flex" size="lg">
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
          <div className="flex gap-[8px]">
            <div>
              <GreenDot />
            </div>
            <Typography className="flex flex-col gap-[12px]">
              <Typography size="lg">Confirmed Quantity: 8/10</Typography>
              <Typography size="body">
                Every user which passed the queue and paid will receive at least one NFT.
              </Typography>
            </Typography>
          </div>
          <div className="flex gap-[8px]">
            <div>
              <YellowDot />
            </div>
            <Typography className="flex flex-col gap-[12px]">
              <Typography size="lg">Filled Extra Quantity: 2/10</Typography>
              <Typography size="body">
                Minter 1 and Minter 3 will each receive 1 additional NFT. Because of the limited number of available
                NFTs, achieving complete equal distribution is not possible, and therefore the rest will be distributed
                with the NOVA fair first-come, first-served mechanism.
              </Typography>
            </Typography>
          </div>
          <div className="flex gap-[8px]">
            <div>
              <RedDot />
            </div>
            <Typography className="flex flex-col gap-[12px]">
              <Typography size="lg">Not Filled Extra Quantity. 5/10</Typography>
              <Typography size="body">These orders will get refunded because the supply is too small.</Typography>
            </Typography>
          </div>
        </div>
        <div className="rounded-[24px] bg-gradint-dark-pink p-[2px]">
          <Typography className="rounded-[24px] bg-bg25 p-[22px]" size="lg">
            If mint is not minted out within 1h, the mint will switch to a First Come First Serve Mint.
          </Typography>
        </div>
      </div>
    </div>
  )
}
