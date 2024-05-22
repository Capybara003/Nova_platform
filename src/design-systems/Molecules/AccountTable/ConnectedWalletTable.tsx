/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ClipboardJS from 'clipboard-js'
import { toast } from 'react-toastify'

import ConfirmationModal from '../ModalMolecules/ConfirmationModal'

import ConnectedTableProps from './ConnetedTableInterface'

import { IMG } from 'assets/images'
import IconAtom from 'design-systems/Atoms/Logo'
import Typography from 'design-systems/Atoms/Typography'
import { DeleteIcon } from 'design-systems/Atoms/Icons'
import { formatAddress } from 'utils/function'
import { useWallet } from 'hooks/apis/useWallet'
import { useDataSelector } from 'lib/redux/store'
import { walletData } from 'lib/redux/slices/walletSlice'

const ConnectedWalletTable: React.FC<ConnectedTableProps> = ({ data, header }) => {
  const dispatch = useDispatch()
  const { wallets } = useDataSelector('walletSlice')
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [selectedId, setSelectedId] = useState(0)

  const { deleteWalletConnect } = useWallet()

  const Clipboard = (item: string) => {
    ClipboardJS.copy(item)
    if (ClipboardJS) {
      toast.success('Copied to clipboard', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      })
    }
  }

  const handleDeleteConnectedWallet = async () => {
    if (selectedId !== 0) {
      const response = await deleteWalletConnect({ id: selectedId })
      if (response.success === true) {
        const newWallet = wallets.filter(item => item.id !== selectedId)
        dispatch(walletData(newWallet))

        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      } else {
        toast.error(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        })
      }
    }
    setOpen(false)
  }

  return (
    <table className="rounded-corners h-full w-full">
      <thead className="h-16">
        <tr className="">
          {header?.map((item, key: number) => (
            <th className="text-md md:!text-body" key={key} style={{ width: item.width }}>
              <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                {item.name}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <React.Fragment key={item.id}>
            <tr>
              <td>
                <div className=" flex cursor-pointer items-center gap-4 hover:text-secondary-25">
                  <IconAtom
                    alt={''}
                    className="flex-shrink-0 overflow-hidden rounded-full"
                    height={46}
                    src={IMG.Compass}
                    width={49}
                  />
                  <Typography onClick={() => Clipboard(item.walletAddress)}>
                    {formatAddress(item.walletAddress)}
                  </Typography>
                </div>
              </td>
              <td>
                <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                  {item.walletName}
                </Typography>
              </td>
              <td>{1.975}</td>
              <td>{525.0}</td>
              <td>{1.975}</td>
              <td>{525.0}</td>
              <td className="min-w-[70px]">
                <div
                  className="flex cursor-pointer items-center justify-center rounded-[8px] bg-black225_05 p-[7px]"
                  onClick={() => {
                    setOpen(!open), setText(item.walletName), setSelectedId(item.id || 0)
                  }}
                >
                  <div>
                    <DeleteIcon />
                  </div>
                </div>
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
      <ConfirmationModal setShow={setOpen} showModal={open} text={text} onClick={handleDeleteConnectedWallet} />
    </table>
  )
}

export default ConnectedWalletTable
