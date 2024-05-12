/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import LargeDataTable from 'design-systems/Molecules/LargeTable'

const MarketOverView: React.FC<any> = ({ data, headData }: any) => {
  return <LargeDataTable data={data} headData={headData} />
}

export default MarketOverView
