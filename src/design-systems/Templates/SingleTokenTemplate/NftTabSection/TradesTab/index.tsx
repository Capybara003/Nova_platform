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
      type: (
        <div className="flex items-center justify-start gap-3">
          <Typography>{item.type}</Typography>
        </div>
      ),
      rarity: <Typography>{item.rarity}₳</Typography>,
      floor: item.floor,
      buyPrice:
        item.buyPrice > 0 ? (
          <Typography className="text-md text-green">+{item.buyPrice}%</Typography>
        ) : (
          <Typography className="text-md text-red">-{item.buyPrice}%</Typography>
        ),
      estFeesOrPaidFees: <Typography>{item.estFeesOrPaidFees}₳</Typography>,
      floorVolumeIncome: <Typography>{item.floorVolumeIncome}</Typography>,
      gains: (
        <div>
          <Typography>{item.gains.value}₳</Typography>
          {item.gains.gainOrLoss > 0 ? (
            <Typography className="text-md text-green">+{item.gains.gainOrLoss}%</Typography>
          ) : (
            <Typography className="text-md text-red">{item.gains.gainOrLoss}%</Typography>
          )}
        </div>
      ),
      sinceTrade: `${item.sinceTrade}₳`,
      holdingTime: <Typography>{item.holdingTime}d</Typography>,
      date: <Typography>{item.date}</Typography>,
      seller: (
        <div className="flex items-center justify-start gap-2 rounded-lg bg-blackCardBg p-2">
          <Image alt={item.seller.name} className="h-6 w-6" height={100} src={item.seller.thumbnail} width={100} />
          <Typography className="overflow-hidden text-ellipsis">{item.seller.name}</Typography>
        </div>
      ),
      link: (
        <div>
          <Image alt={'link'} className="h-6 w-6" height={100} src={IMG.tableLink} width={100} />
        </div>
      ),
    }))
  }, [])

  return (
    <div>
      <RealTimeNftTable data={realTimeNftTableData} headData={tradesTableDataKey(tradesTableFilter)} />
    </div>
  )
}

export default TradesTab
