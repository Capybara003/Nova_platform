import React, { useMemo } from 'react'
import Image from 'next/image'

import {
  topWhalesHoldingAndIncomeDataKey,
  topWhalesHoldingAndIncomeTableData,
  topWhalesTotalDataKey,
  topWhalesTotalTableData,
} from '../../utils'

import RealTimeNftTable from 'design-systems/Molecules/Table/RealTimeNftTable'
import Typography from 'design-systems/Atoms/Typography'

interface TopWhalesTabProps {
  topWhalesTableFilter: string
}

const TopWhalesTab: React.FC<TopWhalesTabProps> = ({ topWhalesTableFilter }) => {
  const realTimeNftTableData = useMemo(() => {
    if (topWhalesTableFilter === 'total') {
      return topWhalesTotalTableData.map(item => ({
        ...item,
        topWhales: (
          <div className="flex items-center justify-start gap-3">
            <Image alt="assets data" className="h-10 w-10" height={200} src={item.thumbnail} width={200} />
            <Typography>{item.title}</Typography>
          </div>
        ),
        value: (
          <div>
            <Typography>{item.value.value}</Typography>
            {item.value.gainOrLoss > 0 ? (
              <Typography className="text-md text-green">+{item.value.gainOrLoss}%</Typography>
            ) : (
              <Typography className="text-md text-red">{item.value.gainOrLoss}%</Typography>
            )}
          </div>
        ),

        holding: (
          <div>
            <Typography>{item.holding.value}</Typography>
            {item.holding.gainOrLoss > 0 ? (
              <Typography className="text-md text-green">+{item.holding.gainOrLoss}%</Typography>
            ) : (
              <Typography className="text-md text-red">{item.holding.gainOrLoss}%</Typography>
            )}
          </div>
        ),

        sold: (
          <div>
            <Typography>{item.sold.value}</Typography>
            {item.sold.gainOrLoss > 0 ? (
              <Typography className="text-md text-green">+{item.sold.gainOrLoss}%</Typography>
            ) : (
              <Typography className="text-md text-red">{item.sold.gainOrLoss}%</Typography>
            )}
          </div>
        ),

        buyVolume: item.buyVolume ? <Typography>{item.buyVolume}</Typography> : '',

        paidEstFees: <Typography>{item.estFees + item.paidFees}₳</Typography>,
        incomeFloorValue: <Typography>{item.income + item.floorPrice}₳</Typography>,
        gains: (
          <div>
            <Typography>{item.gains.value}</Typography>
            {item.gains.gainOrLoss > 0 ? (
              <Typography className="text-md text-green">+{item.gains.gainOrLoss}%</Typography>
            ) : (
              <Typography className="text-md text-red">{item.gains.gainOrLoss}%</Typography>
            )}
          </div>
        ),

        volume: item.volume ? <Typography>{item.volume}</Typography> : '',
        holdingTime: item.holdingTime ? <Typography>{item.holdingTime}d</Typography> : '',
      }))
    } else {
      return topWhalesHoldingAndIncomeTableData.map(item => ({
        ...item,
        topWhales: (
          <div className="flex items-center justify-start gap-3">
            <Image alt="assets data" className="h-10 w-10" height={200} src={item.thumbnail} width={200} />
            <Typography>{item.title}</Typography>
          </div>
        ),
        floorValue: (
          <div>
            <Typography>{item.floorValue.value}</Typography>
            {item.floorValue.gainOrLoss > 0 ? (
              <Typography className="text-md text-green">+{item.floorValue.gainOrLoss}%</Typography>
            ) : (
              <Typography className="text-md text-red">{item.floorValue.gainOrLoss}%</Typography>
            )}
          </div>
        ),

        holdingOrSold: (
          <div>
            <Typography>{item.holdingOrSold.value}</Typography>
            {item.holdingOrSold.gainOrLoss > 0 ? (
              <Typography className="text-md text-green">+{item.holdingOrSold.gainOrLoss}%</Typography>
            ) : (
              <Typography className="text-md text-red">{item.holdingOrSold.gainOrLoss}%</Typography>
            )}
          </div>
        ),

        buyVolume: item.buyVolume ? <Typography>{item.buyVolume}</Typography> : '',

        paidOrEstFees: <Typography>{item.paidOrEstFees}₳</Typography>,
        incomeOrFloorValue: <Typography>{item.incomeOrFloorValue}₳</Typography>,
        gains: (
          <div>
            <Typography>{item.gains.value}</Typography>
            {item.gains.gainOrLoss > 0 ? (
              <Typography className="text-md text-green">+{item.gains.gainOrLoss}%</Typography>
            ) : (
              <Typography className="text-md text-red">{item.gains.gainOrLoss}%</Typography>
            )}
          </div>
        ),

        volume: item.volume ? <Typography>{item.volume}</Typography> : '',
        holdingTime: item.holdingTime ? <Typography>{item.holdingTime}d</Typography> : '',
      }))
    }
  }, [topWhalesTableFilter])

  return (
    <div>
      <RealTimeNftTable
        data={realTimeNftTableData}
        headData={
          topWhalesTableFilter === 'total'
            ? topWhalesTotalDataKey
            : topWhalesHoldingAndIncomeDataKey(topWhalesTableFilter)
        }
        isShowCheckBox
      />
    </div>
  )
}

export default TopWhalesTab
