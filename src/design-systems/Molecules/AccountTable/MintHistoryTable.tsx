import ClipboardJS from 'clipboard-js'
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify'

import MintTableProps from './MintTable'

import NftLogo from 'assets/images/logo2.png'
import Typography from 'design-systems/Atoms/Typography'

const MintHistoryTable: React.FC<MintTableProps> = ({ data }) => {
  const Clipboard = (item: string) => {
    ClipboardJS.copy(item)
    if (ClipboardJS) {
      toast.success('Copied to clipboard', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      })
    }
  }
  return (
    <table className="rounded-corners h-full w-full">
      <thead>
        <tr>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              NFT
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Asset Name
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Asset ID
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Policy ID
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Project
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Price
            </Typography>
          </th>
          <th className="text-md md:!text-body">
            <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
              Address
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <React.Fragment key={item.id}>
            <tr>
              <td>
                <div className="flex items-center ">
                  <Image alt={''} className="flex-shrink-0" height={46} src={NftLogo} width={49} />
                </div>
              </td>
              <td>{item.assetName}</td>
              <td className="cursor-pointer hover:text-secondary-25" onClick={() => Clipboard(item.assetId)}>
                {item.assetId}
              </td>
              <td className="cursor-pointer hover:text-secondary-25" onClick={() => Clipboard(item.policyId)}>
                {item.policyId}
              </td>
              <td>{item.project}</td>
              <td>{item.price}</td>
              <td className="cursor-pointer hover:text-secondary-25" onClick={() => Clipboard(item.walletAddress)}>
                {item.walletAddress}
              </td>
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

export default MintHistoryTable
