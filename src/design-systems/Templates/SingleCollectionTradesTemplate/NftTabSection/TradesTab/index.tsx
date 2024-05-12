import React, { useMemo } from 'react'
import Image from 'next/image'

import { tableData, tradesTableDataKey } from '../../utils'

import { IMG } from 'assets/images'
import RealTimeNftTable from 'design-systems/Molecules/Table/RealTimeNftTable'
import Typography from 'design-systems/Atoms/Typography'

interface TradesTabProps {
  tradesTableFilter: string
}

const TradesTab: React.FC<TradesTabProps> = ({ tradesTableFilter }) => {
  const realTimeNftTableData = useMemo(() => {
    return tableData.map(item => ({
      ...item,
      asset: (
        <div className="flex items-center justify-start gap-3">
          <Image alt="assets data" className="h-[48px] w-[48px]" height={200} src={item.thumbnail} width={200} />
          <Typography className="text-left">{item.asset}</Typography>
        </div>
      ),
      listedPrice: <Typography>{item.listedPrice}₳</Typography>,
      aboveFloor:
        item.aboveFloor > 0 ? (
          <Typography className="text-green">+{item.aboveFloor}%</Typography>
        ) : (
          <Typography className="text-red">{item.aboveFloor}%</Typography>
        ),
      buyerPotentialGains: (
        <div>
          <Typography>{item.buyerPotentialGains.value}₳</Typography>
          {item.buyerPotentialGains.gainOrLoss > 0 ? (
            <Typography className="text-md text-green">+{item.buyerPotentialGains.gainOrLoss}%</Typography>
          ) : (
            <Typography className="text-md text-red">{item.buyerPotentialGains.gainOrLoss}%</Typography>
          )}
        </div>
      ),
      sellerUnrealizedGains: (
        <div>
          <Typography>{item.sellerUnrealizedGains.value}</Typography>
          {item.sellerUnrealizedGains.gainOrLoss > 0 ? (
            <Typography className="text-md text-green">+{item.sellerUnrealizedGains.gainOrLoss}%</Typography>
          ) : (
            <Typography className="text-md text-red">{item.sellerUnrealizedGains.gainOrLoss}%</Typography>
          )}
        </div>
      ),

      holdingTime: <Typography>{item.holdingTime}d</Typography>,

      seller: (
        <div className="flex items-center justify-start gap-2 rounded-lg bg-blackCardBg p-2">
          <Image alt={item.seller.name} className="h-6 w-6" height={100} src={item.seller.thumbnail} width={100} />
          <Typography className="overflow-hidden text-ellipsis">{item.seller.name}</Typography>
        </div>
      ),

      link: (
        <div className="flex justify-center">
          <div className="rounded-[8px] bg-black225_05 p-[4px]">
            <Image alt={'link'} className="h-6 w-6" height={100} src={IMG.tableLink} width={100} />
          </div>
        </div>
      ),

      estOrPaidFees: <Typography>{item.estOrPaidFees}₳</Typography>,
    }))
  }, [])

  const headData = useMemo(() => tradesTableDataKey(tradesTableFilter), [tradesTableFilter])
  return (
    <div className="">
      <RealTimeNftTable data={realTimeNftTableData} headData={headData} />
    </div>
  )
}

export default TradesTab
