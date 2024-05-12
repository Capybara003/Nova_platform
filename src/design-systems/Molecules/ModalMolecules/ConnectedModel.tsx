/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ClipboardJS from 'clipboard-js'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { IMG } from 'assets/images'
import Button from 'design-systems/Atoms/Button'
import { EditIcons } from 'design-systems/Atoms/Icons'
import InputAtom from 'design-systems/Atoms/Input/InputAtom'
import IconAtom from 'design-systems/Atoms/Logo'
import { Model } from 'design-systems/Atoms/Model'
import Typography from 'design-systems/Atoms/Typography'
interface ConnectedModelProps {
  className?: string
  onClick?: any
  setShow: (value: boolean) => void
  showModal: boolean
  data: any
  header: {
    name: string
    key: string
    isInfo: boolean
    isSort: boolean
    width: string
  }[]
}

export const ConnectedModel: React.FC<ConnectedModelProps> = ({ showModal, header, data, setShow }) => {
  const [toggle, setToggle] = useState(-1)

  const HandleToggle = (key: number) => {
    setToggle(key)
  }

  const Clipboard = (item: string) => {
    ClipboardJS.copy(item)
    if (ClipboardJS) {
      toast.success('Copied to clipboard', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
      })
    }
  }
  const HandleSuccess = () => {
    toast.success('Name Change successfully', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  return (
    <Model heading="Connected Wallets Edit" setShow={() => setShow(!showModal)} showModal={showModal}>
      <div>
        <div className="max-h-[532px]">
          <table className="rounded-corners w-full rounded-sm   pe-[12px] font-Lexend">
            <thead className="bg-black225_05 before:h-full before:bg-[#0c0a14] after:h-full after:bg-[#0c0a14]">
              <tr className="">
                {header?.map((item, key: number) => {
                  return (
                    <th style={{ width: item.width }} key={key}>
                      <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                        {item.name}
                      </Typography>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((item: any, key: number) => {
                const [saveCancle, setSaveCancle] = useState(item.name)

                return (
                  <React.Fragment key={item.id}>
                    <tr>
                      <td>
                        <div className=" flex cursor-pointer items-center gap-4 hover:text-secondary-25">
                          <IconAtom alt={''} className="flex-shrink-0" height={46} src={IMG.Eternl} width={49} />
                          <Typography onClick={() => Clipboard(item.address)}>{item.address}</Typography>
                        </div>
                      </td>
                      <td>
                        {toggle === key ? (
                          <InputAtom
                            className=" h-[30px] rounded-xs border-2 border-[#C517D1] bg-transparent p-[9.9px]"
                            // defaultValue={item.name}
                            placeholder={item.name}
                            type="text"
                            value={saveCancle}
                            onChange={e => {
                              setSaveCancle(e.target.value)
                            }}
                          />
                        ) : (
                          <>{item.name}</>
                        )}
                      </td>
                      <td>{item.floorValue}</td>
                      <td>{item.tradeValue}</td>
                      <td>{item.nft}</td>
                      <td>{item.token}</td>
                      <td>
                        <div className="flex !w-full justify-center">
                          {toggle !== key ? (
                            <div className="flex justify-center">
                              <div
                                className="flex cursor-pointer rounded-[8px] bg-black225_05 p-[4px]"
                                onClick={() => HandleToggle(key)}
                              >
                                <div>
                                  <EditIcons />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="grid w-full grid-cols-2 gap-1">
                              <Button
                                className=" flex h-[30px] w-full  flex-row items-center justify-center gap-2 rounded-[6px] bg-button-gradient p-[10px] font-Lexend"
                                onClick={() => {
                                  HandleToggle(-1), HandleSuccess()
                                }}
                              >
                                <Typography size="md">Save</Typography>
                              </Button>
                              <Button
                                className="h-[30px] rounded-[6px] bg-gradient-pink px-[3px] pb-[2px] pt-[3px]"
                                onClick={() => HandleToggle(-1)}
                              >
                                <div className=" flex h-[30px] w-full  flex-row items-center justify-center gap-2 rounded-[6px] bg-gradient-pink p-[10px] font-Lexend">
                                  <Typography size="md">Cancel</Typography>
                                </div>
                              </Button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                )
              })}
            </tbody>
            <tfoot className="transparent-footer-bg">
              <tr>
                <td
                  className="!border-[#ffffff0d] !pb-0 before:!bg-[#0b0a0e] after:!bg-[#0b0a0e]"
                  colSpan={header.length}
                ></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Model>
  )
}
