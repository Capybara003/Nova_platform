import React from 'react'

import MintHistoryTable from '../AccountTable/MintHistoryTable'

import { data } from 'app/account/utils'
import Typography from 'design-systems/Atoms/Typography'

const MintHistory: React.FC = () => {
  return (
    <div className="h-full ">
      <div className="flex h-full flex-col gap-[24px] rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px]">
        <Typography className=" text-left font-normal" size="subtitle">
          Mint History
        </Typography>
        <div className=" max-h-[300px] w-full overflow-y-auto rounded-xs pe-[12px]">
          <MintHistoryTable data={data} />
        </div>
      </div>
    </div>
  )
}

export default MintHistory
