import React from 'react'

import ModalTableProps from './interface'

import Line from 'design-systems/Atoms/Line'
import Typography from 'design-systems/Atoms/Typography'
import IconAtom from 'design-systems/Atoms/Logo'
import scrollIcon from 'assets/images/scroll.svg'

const ModalTable: React.FC<ModalTableProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse">
      <thead className="bg-blackCardBg">
        <tr className="h-16">
          <th className="px-4 py-2 ">
            <div className="flex items-center justify-center space-x-2">
              <Typography size="md">Diamond Hands</Typography>
              <IconAtom alt={''} className="flex-shrink-0" height={10} src={scrollIcon} width={6} />
            </div>
          </th>
          <th className="px-4 py-2 ">
            <div className="flex items-center justify-center space-x-2">
              <Typography size="md">Paper Hands</Typography>
              <IconAtom alt={''} className="flex-shrink-0" height={10} src={scrollIcon} width={6} />
            </div>
          </th>
          <th className="px-4 py-2">
            <Typography size="md">Links</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={item.id}>
            <tr>
              <td className="px-4 py-2 ">
                <div>
                  <span>
                    <Typography size="md">{item.diamondHands}</Typography>
                  </span>
                </div>
              </td>
              <td className="px-4 py-2 ">
                <div>
                  <span>
                    <Typography size="md">{item.paperHands}</Typography>
                  </span>
                </div>
              </td>

              <td className="px-4 py-2">
                <div>
                  <span>
                    <Typography size="md">-</Typography>
                  </span>
                </div>
              </td>
            </tr>
            {index !== data.length - 1 && (
              <tr>
                <td colSpan={5}>
                  <Line />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default ModalTable
