'use client'
import { useState } from 'react'

import Button from 'design-systems/Atoms/Button'
import { DownArrow, FilterIcon } from 'design-systems/Atoms/Icons'
import WhalesModel from 'design-systems/Molecules/ModalMolecules/WhalesModel'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import HoldingWhales from 'design-systems/Molecules/WhaleWatchlistMolecules/HoldingWhales'
import IncomingWales from 'design-systems/Molecules/WhaleWatchlistMolecules/IncomingWales'
import TotalTable from 'design-systems/Molecules/WhaleWatchlistMolecules/TotalTable'
import { TotalTableData } from 'design-systems/data/data'

const WhaleWatchlistTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeTab2, setActiveTab2] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const handleTabChange2 = (tab: number) => {
    setActiveTab2(tab)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  return (
    <div className="flex h-full !w-full flex-col gap-[22px] !rounded-md bg-black225_05 p-2 md:!p-[22px]">
      <div className="flex flex-wrap justify-between gap-3 pe-[6px]">
        <div className="!w-full xsm:overflow-y-auto md:!w-auto">
          <NavTabsMolecule
            activeTab={activeTab}
            className="!w-full"
            tabs={['Total', 'Holding', 'Income']}
            onTabChange={handleTabChange}
          />
        </div>
        <div>
          <NavTabsMolecule activeTab={activeTab2} tabs={['Wallets', 'Accounts']} onTabChange={handleTabChange2} />
        </div>
        <div className="flex gap-4">
          <Button
            className="flex !w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 md:!w-auto"
            onClick={() => openModal()}
          >
            <FilterIcon />
            <DownArrow />
          </Button>
        </div>
      </div>
      {activeTab === 0 && (
        <TotalTable
          data={TotalTableData}
          headData={[
            { name: 'Wallet', key: 'Wallet', isInfo: false, isSort: false },
            { name: 'Chart', key: 'Chart', isInfo: false, isSort: true },
            { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true },
            { name: 'Buy Volume', key: 'BuyVolume', isInfo: true, isSort: true },
            { name: 'Paid Fees + Est. Fees', key: 'PaidFeesEstFees', isInfo: true, isSort: true },
            { name: 'Income + Floor Value', key: 'IncomeFloorValue', isInfo: true, isSort: true },
            { name: 'Gains', key: 'Gains', isInfo: true, isSort: true },
            { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
          ]}
        />
      )}
      {activeTab === 1 && (
        <HoldingWhales
          data={TotalTableData}
          headData={[
            { name: 'Wallet', key: 'Wallet', isInfo: false, isSort: false },
            { name: 'Chart', key: 'Chart', isInfo: false, isSort: true },
            { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true },
            { name: 'Buy Volume', key: 'BuyVolume', isInfo: true, isSort: true },
            { name: 'Est. Fees', key: 'EstFees', isInfo: true, isSort: true },
            { name: 'Floor Value', key: 'FloorValue', isInfo: true, isSort: true },
            { name: 'Unrealized Gains', key: 'UnrealizedGains', isInfo: true, isSort: true },
            { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
          ]}
        />
      )}
      {activeTab === 2 && (
        <IncomingWales
          data={TotalTableData}
          headData={[
            { name: 'Wallet', key: 'Wallet', isInfo: false, isSort: false },
            { name: 'Chart', key: 'Chart', isInfo: false, isSort: true },
            { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true },
            { name: 'Buy Volume', key: 'BuyVolume', isInfo: true, isSort: true },
            { name: 'Paid Fees', key: 'PaidFees', isInfo: true, isSort: true },
            { name: 'Income', key: 'Income', isInfo: true, isSort: true },
            { name: 'Realized Gains', key: 'RealizedGains', isInfo: true, isSort: true },
            { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
          ]}
        />
      )}
      <WhalesModel
        activeTabIndex={activeTab}
        heading={`Whale Watching Settings`}
        setShow={setIsModalOpen}
        showModal={isModalOpen}
      />
    </div>
  )
}

export default WhaleWatchlistTemplate
