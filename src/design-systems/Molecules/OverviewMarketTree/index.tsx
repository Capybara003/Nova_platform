/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react'

import { useMarket } from 'hooks/apis/useMarket'
import TreeMapGraph from 'design-systems/Atoms/TreeMap'

const OverviewMarketTree: React.FC = () => {
  const [TreeData, setTreeData] = useState([])
  const { TreeMap, isLoadingTreeMap } = useMarket()

  useMemo(() => {
    setTreeData(TreeMap)
  }, [TreeMap, isLoadingTreeMap])

  return (
    <div className="h-full w-full">
      <TreeMapGraph />
    </div>
  )
}

export default OverviewMarketTree
