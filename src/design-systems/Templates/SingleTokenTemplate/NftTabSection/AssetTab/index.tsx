import Image from 'next/image'
import React, { useMemo } from 'react'

import { assetsTableData, assetsTableDataKey } from '../../utils'

import { IMG } from 'assets/images'
import Typography from 'design-systems/Atoms/Typography'
import RealTimeNftTable from 'design-systems/Molecules/Table/RealTimeNftTable'

const AssetTab: React.FC = () => {
  const realTimeNftTableData = useMemo(() => {
    return assetsTableData.map(item => ({
      ...item,
      asset: (
        <div className="flex items-center justify-start gap-3">
          <Image alt="assets data" className="h-10 w-10" height={200} src={item.thumbnail} width={200} />
          <Typography>{item.asset}</Typography>
        </div>
      ),
      buyPrice: <Typography>{item.buyPrice}₳</Typography>,

      unrealizedProfitOrLoss: (
        <div>
          <Typography>{item.unrealizedProfitOrLoss.value}</Typography>
          {item.unrealizedProfitOrLoss.gainOrLoss > 0 ? (
            <Typography className="text-md text-green">+{item.unrealizedProfitOrLoss.gainOrLoss}%</Typography>
          ) : (
            <Typography className="text-md text-red">{item.unrealizedProfitOrLoss.gainOrLoss}%</Typography>
          )}
        </div>
      ),

      holder: (
        <div className="flex items-center justify-start gap-2 rounded-lg bg-blackCardBg p-2">
          <Image alt={item.holder.name} className="h-6 w-6" height={100} src={item.holder.thumbnail} width={100} />
          <Typography className="overflow-hidden text-ellipsis">{item.holder.name}</Typography>
        </div>
      ),

      link: (
        <div>
          <Image alt={'link'} className="h-6 w-6" height={100} src={IMG.tableLink} width={100} />
        </div>
      ),

      estFees: item.estFees ? <Typography>{item.estFees}₳</Typography> : '',
    }))
  }, [])
  return (
    <div>
      <RealTimeNftTable data={realTimeNftTableData} headData={assetsTableDataKey} />
    </div>
  )
}

export default AssetTab
