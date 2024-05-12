import React from 'react'

import PaymentTableProps from './PaymentTable'

// Import the Line component
import infographiclogo from 'assets/images/infographic.svg'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'

const PaymentHistoryTable: React.FC<PaymentTableProps> = ({ data }) => {
  return (
    <table className="rounded-corners w-full border-collapse">
      <thead>
        <tr className="h-16">
          <th></th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Abo Type
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Date
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Duration
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Expiration
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Amount
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Method
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <React.Fragment key={item.id}>
            <tr>
              <td className="">
                {/* Add your logo image source here */}
                <IconAtom alt={''} className="flex-shrink-0" height={49} src={infographiclogo} width={50} />
              </td>
              <td>{item.aboType}</td>
              <td>{item.date}</td>
              <td>{item.duration}</td>
              <td>{item.expiration}</td>
              <td>{item.amount}</td>
              <td>{item.method}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>

      <tfoot className="transparent-footer-bg">
        <tr>
          <td colSpan={7}></td>
        </tr>
      </tfoot>
    </table>
  )
}

export default PaymentHistoryTable
