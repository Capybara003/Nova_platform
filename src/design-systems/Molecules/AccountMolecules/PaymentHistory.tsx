import React from 'react'

import PaymentHistoryTable from '../AccountTable/PaymentHistoryTable'

import { data } from 'app/account/utils'
import Typography from 'design-systems/Atoms/Typography'

const PaymentHistory: React.FC = () => {
  return (
    <div className="h-full ">
      <div className="flex max-h-full flex-col gap-[24px] rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px]">
        <Typography className=" text-left font-normal" size="subtitle">
          Payment History
        </Typography>
        <div className="max-h-[300px] w-full overflow-y-auto rounded-xs pe-[12px]">
          <PaymentHistoryTable data={data} />
        </div>
      </div>
    </div>
  )
}

export default PaymentHistory
