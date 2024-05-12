import React from 'react'

import ModalTable from 'design-systems/Molecules/ModalTable'
import { data } from 'design-systems/Templates/MarketAnaliticsTemplate/utils'

const TableModal: React.FC = () => {
  return (
    <div className="w-full rounded-xs p-2 font-Lexend">
      <ModalTable data={data} />
    </div>
  )
}

export default TableModal
