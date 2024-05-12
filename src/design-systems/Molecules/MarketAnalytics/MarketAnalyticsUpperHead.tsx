import React from 'react'

import Box from '../Box'

import Typography from 'design-systems/Atoms/Typography'

interface MarketAnalyticsUpperHeadProps {
  data: MarketAnalyticsData | undefined
  isLoading: boolean
}

const MarketAnalyticsUpperHead: React.FC<MarketAnalyticsUpperHeadProps> = ({ data, isLoading }) => {
  return (
    <div className="grid w-full !grid-cols-1 justify-between gap-6  font-Lexend text-[#DBDBDB] xsm:!grid-cols-2 md:!grid-cols-4">
      <Box className="flex  flex-col items-center justify-center !rounded-md bg-blackCardBg px-6 py-3">
        <Typography className="font-medium" size="subtitle">
          ADA Market Cap
        </Typography>
        <Typography className="mt-4 font-medium" isLoading={isLoading} size="lg">
          {data?.adaMarketCap ? `${data.adaMarketCap} $` : '--'}
        </Typography>
      </Box>
      <Box className="flex  flex-col items-center  justify-center !rounded-md bg-blackCardBg px-6 py-3">
        <Typography className="font-medium" size="subtitle">
          Total ADA Staked
        </Typography>
        <Typography className="mt-4 font-medium" isLoading={isLoading} size="lg">
          {data?.totalAdaStaked ? `${data.totalAdaStaked} ₳` : '--'}
        </Typography>
      </Box>
      <Box className="flex  flex-col items-center justify-center !rounded-md bg-blackCardBg px-6 py-3">
        <Typography className="font-medium" size="subtitle">
          Total Stake Pools
        </Typography>
        <Typography className="mt-4 font-medium" isLoading={isLoading} size="lg">
          {data?.totalStakePools ? `${data.totalStakePools} ₳` : '--'}
        </Typography>
      </Box>
      <Box className="flex  flex-col items-center justify-center !rounded-md bg-blackCardBg px-6 py-3">
        <Typography className="font-medium" size="subtitle">
          Rewards Distributed
        </Typography>
        <Typography className="mt-4 font-medium" isLoading={isLoading} size="lg">
          Epoch {data?.rewardsDistributed ? `${data.rewardsDistributed}` : '--'}
        </Typography>
      </Box>
    </div>
  )
}

export default MarketAnalyticsUpperHead
