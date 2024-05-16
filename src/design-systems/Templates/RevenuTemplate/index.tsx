/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useState } from 'react'

import { Graphdata } from '../MarketAnaliticsTemplate/utils'

import Button from 'design-systems/Atoms/Button'
import { BlueDot, DownArrow, ExportIcons, FilterIcon, YellowDot } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import HoldingDataGroup from 'design-systems/Molecules/HoldingMolecules/HoldingDataGroup'
import HoldingDataGroup2 from 'design-systems/Molecules/HoldingMolecules/HoldingDataGroup2'
import RevenuModel from 'design-systems/Molecules/ModalMolecules/RevenuModel'
import RevenuLendingTable from 'design-systems/Molecules/RevenuTable/RevenuLendingTable'
import StakingTable from 'design-systems/Molecules/RevenuTable/StakingTable'
import TwoLineGraph from 'design-systems/Molecules/TwoLineGraph'
import { GraphTwoLineData, StakingData, StakingData1 } from 'design-systems/data/data'
import { NoData } from 'design-systems/Atoms/NoData'

const RevenuTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [walletLoading, setWalletLoading] = useState<boolean>(false)
  const LocalWallet = localStorage.getItem('walletLoading')
  useEffect(() => {
    if (LocalWallet !== null) {
      setWalletLoading(JSON.parse(LocalWallet))
    }
  }, [LocalWallet])
  const openModal = () => {
    setIsModalOpen(true)
  }
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  return (
    <div className="flex w-full flex-col gap-[22px] font-Lexend">
      <div className="grid w-full !grid-cols-1 flex-col justify-center gap-[20px]  md:flex-row  lg:!grid-cols-7  ">
        <HoldingDataGroup />
        <div className="w-full rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px] lg:col-span-3">
          <div className="flex w-full flex-col gap-8">
            <div className="!rounded-xs bg-blackCardBg">
              <div className="flex !flex-col gap-14 overflow-hidden overflow-ellipsis whitespace-nowrap p-[18px] md:!flex-row md:items-center">
                {[
                  { color: 'Yellow', label: 'Holdings' },
                  { color: 'Blue', label: 'Gains' },
                ].map(({ color, label }) => (
                  <div
                    className="relative flex w-full flex-row items-start justify-between overflow-hidden overflow-ellipsis whitespace-nowrap text-left md:!flex-col"
                    key={label}
                  >
                    <div className="flex items-center gap-2">
                      {color === 'Yellow' ? <YellowDot /> : <BlueDot />}
                      <Typography className="font-Poppins" size="paragraph">
                        {label}
                      </Typography>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <Typography className="font-Poppins font-normal" size="h3">
                        5.463,56 SEI
                      </Typography>
                      <Typography className="font-Poppins text-success-500" size="paragraph">
                        +225,53%
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <TwoLineGraph
              data={GraphTwoLineData.items}
              height={500}
              hideXAxis={false}
              lineColor="#6F1ED7"
              lineColor2="#CE9136"
              lineKeys={[
                {
                  key: 'holding',
                  strokeColor: '#6F1ED7',
                },
                {
                  key: 'gains',
                  strokeColor: '#CE9136',
                },
              ]}
              lineWidth={2}
              width="100%"
              xKey="date"
              yKey="quantity"
            />
          </div>
        </div>
        <HoldingDataGroup2 />
      </div>
      <div className=" flex w-full flex-col gap-[22px] !rounded-md bg-blackCardBg p-[22px]  ">
        {/* {walletLoading ? ( */}
        <>
          <div className="flex w-full !flex-wrap items-center justify-end gap-[22px]">
            {/* <div className="!w-full xsm:overflow-y-auto md:!w-auto">
            <NavTabsMolecule activeTab={activeTab} tabs={['Revenue Cal.', 'Taxes']} onTabChange={handleTabChange} />
          </div> */}
            <div className="flex h-fit w-full flex-row gap-[16px] md:!w-auto">
              <Button className="flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 md:w-auto ">
                <Typography>Export</Typography>
                <ExportIcons />
              </Button>
              <Button
                className="flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 md:w-auto"
                onClick={openModal}
              >
                <FilterIcon />
                <DownArrow />
              </Button>
            </div>
          </div>
          <Typography className="text-left text-[25px] font-medium ">Staking, Bought</Typography>
          <div className="max-h-[599px]  overflow-auto pe-[12px] ">
            {activeTab === 0 && (
              <StakingTable
                data={StakingData}
                headData={[
                  { name: 'Name', key: 'Name', isInfo: false, isSort: false },
                  { name: 'Amount', key: 'Amount', isInfo: false, isSort: true },
                  { name: 'Weight', key: 'Weight', isInfo: true, isSort: true },
                  { name: 'Floor', key: 'Floor', isInfo: false, isSort: true },
                  { name: 'Rarity', key: 'Rarity', isInfo: false, isSort: true },
                  { name: 'Token', key: 'Token', isInfo: false, isSort: true },
                  { name: 'Token Price', key: 'TokenPrice', isInfo: false, isSort: true },
                  { name: 'Buy Price', key: 'BuyPrice', isInfo: true, isSort: true },
                  { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true },
                  { name: 'Token Rewards', key: 'TokenRewards', isInfo: false, isSort: true },
                  { name: 'ROI', key: 'ROI', isInfo: false, isSort: true },
                  { name: 'Link', key: 'Link', isInfo: false, isSort: true },
                ]}
              />
            )}
            {/* {activeTab === 1 && (
              <StakingTable
                data={StakingData1}
                headData={[
                  'Name',
                  'Amount',
                  'Weight',
                  'Floor',
                  'Rarity',
                  'Token',
                  'Token Price',
                  'Buy Price',
                  'Floor Value',
                  'Token Rewards',
                  'ROI',
                  'Link',
                ]}
              />
            )} */}
          </div>
        </>
        {/* ) : (
          <NoData label="No Wallet Connect" />
        )} */}
      </div>
      {walletLoading && (
        <div className=" flex w-full flex-col gap-[22px] !rounded-md bg-blackCardBg p-[22px]">
          <Typography className="text-left text-[25px] font-medium ">Lending</Typography>
          <div className="max-h-[599px]  overflow-auto pe-[12px] ">
            {/* {activeTab === 0 && (
              <RevenuLendingTable
                data={StakingData}
                headData={[
                  'Name',
                  'Amount',
                  'Floor',
                  'Floor Value',
                  'Lending Time',
                  'Lent Funds',
                  'Expected Interest',
                  'Est. Fees',
                  'ROI',
                  'Link',
                ]}
              />
            )}
            {activeTab === 1 && (
              <RevenuLendingTable
                data={StakingData1}
                headData={[
                  'Name',
                  'Amount',
                  'Floor',
                  'Floor Value',
                  'Lending Time',
                  'Lent Funds',
                  'Expected Interest',
                  'Est. Fees',
                  'ROI',
                  'Link',
                ]}
              />
            )} */}
          </div>
        </div>
      )}
      <RevenuModel setShow={setIsModalOpen} showModal={isModalOpen} />
    </div>
  )
}

export default RevenuTemplate
