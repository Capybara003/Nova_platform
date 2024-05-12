/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react'

import Button from 'design-systems/Atoms/Button'
import { DownArrow, FilterIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import CollectionModel from 'design-systems/Molecules/ModalMolecules/CollectionModel'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import AccountsTable from 'design-systems/Molecules/WatchlistMolecules/AccountsTable'
import CollectionTables from 'design-systems/Molecules/WatchlistMolecules/CollectionTables'
import IndexTables from 'design-systems/Molecules/WatchlistMolecules/IndexTables'
import ProjectTables from 'design-systems/Molecules/WatchlistMolecules/ProjectTables'
import WalletTables from 'design-systems/Molecules/WatchlistMolecules/WalletTables'
import { CollectionData, WalletsData } from 'design-systems/data/data'
import OnSelect from 'design-systems/Molecules/OnSelect'

const WatchlistTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
  }
  const openModal = () => {
    setIsModalOpen(true)
  }
  const handleSelect = (selectedOption: string) => {}
  return (
    <div className="flex h-full !w-full flex-col gap-[22px] rounded-[12px] bg-black225_05 p-2 md:!rounded-md md:!p-[22px]">
      <div className="flex w-full flex-col justify-between gap-3 md:flex-row">
        <div className="!w-full xsm:overflow-y-auto md:!w-auto">
          <NavTabsMolecule
            activeTab={activeTab}
            tabs={['Collections', 'Projects', 'Index', 'Wallets', 'Accounts']}
            onTabChange={handleTabChange}
          />
        </div>
        <div className=" flex gap-4">
          {activeTab === 3 ||
            (activeTab === 4 && (
              <OnSelect
                className="w-full"
                imageHeight={0}
                imageSrc={''}
                imageWidth={0}
                options={['Total', 'Holding', 'Income']}
                onSelect={handleSelect}
              />
            ))}
          <Button
            className="flex !w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 md:!w-auto"
            onClick={() => openModal()}
          >
            <FilterIcon />
            <DownArrow />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll">
        {activeTab === 0 && (
          <CollectionTables
            data={CollectionData}
            headData={[
              { name: 'Name', key: 'Name', isInfo: false, isSort: false },
              { name: 'Price', key: 'Price', isInfo: false, isSort: true },
              { name: 'Chart', key: 'Chart', isInfo: false, isSort: true },
              { name: 'Market Cap (MC)', key: 'MarketCap(MC)', isInfo: true, isSort: true },
              { name: 'Fully Diluted MC', key: 'FullyDilutedMC', isInfo: true, isSort: true },
              { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
              { name: 'Liquidity', key: 'Liquidity', isInfo: true, isSort: true },
              { name: 'Holder', key: 'Holder', isInfo: true, isSort: true },
              { name: 'Buyers', key: 'Buyers', isInfo: true, isSort: true },
              { name: 'Sellers', key: 'Sellers', isInfo: true, isSort: true },
            ]}
          />
        )}
        {activeTab === 1 && (
          <ProjectTables
            data={CollectionData}
            headData={[
              { name: 'Name', key: 'Name', isInfo: false, isSort: false },
              { name: 'Price', key: 'Price', isInfo: false, isSort: true },
              { name: 'Chart', key: 'Chart', isInfo: false, isSort: false },
              { name: 'Market Cap (MC)', key: 'MarketCap(MC)', isInfo: true, isSort: true },
              { name: 'Fully Diluted MC', key: 'FullyDilutedMC', isInfo: true, isSort: false },
              { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
              { name: 'Liquidity', key: 'Liquidity', isInfo: true, isSort: true },
              { name: 'Holder', key: 'Holder', isInfo: false, isSort: true },
              { name: 'Buyers', key: 'Buyers', isInfo: false, isSort: true },
              { name: 'Sellers', key: 'Sellers', isInfo: false, isSort: true },
            ]}
          />
        )}
        {activeTab === 2 && (
          <IndexTables
            data={CollectionData}
            headData={[
              { name: 'Index', key: 'Index', isInfo: false, isSort: false },
              { name: 'Price', key: 'Price', isInfo: false, isSort: true },
              { name: 'Chart', key: 'Chart', isInfo: false, isSort: true },
              { name: 'Market Cap (MC)', key: 'MarketCap(MC)', isInfo: true, isSort: true },
              { name: 'Fully Diluted MC', key: 'FullyDilutedMC', isInfo: true, isSort: true },
              { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
              { name: 'Liquidity', key: 'Liquidity', isInfo: true, isSort: true },
              { name: 'Holder', key: 'Holder', isInfo: true, isSort: true },
              { name: 'Buyers', key: 'Buyers', isInfo: true, isSort: true },
              { name: 'Sellers', key: 'Sellers', isInfo: true, isSort: true },
            ]}
          />
        )}
        {activeTab === 3 && (
          <WalletTables
            data={WalletsData}
            headData={[
              { name: 'Wallet', key: 'Wallet', isInfo: false, isSort: false },
              { name: 'Chart', key: 'Chart', isInfo: false, isSort: true },
              { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true },
              { name: 'Buy Volume', key: 'BuyVolume', isInfo: true, isSort: true },
              { name: 'Paid Fees + Est. Fees', key: 'PaidFees+Est.Fees', isInfo: true, isSort: true },
              { name: 'Income + Floor Value', key: 'Income+FloorValue', isInfo: true, isSort: true },
              { name: 'Gains', key: 'Gains', isInfo: true, isSort: true },
              { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
            ]}
          />
        )}
        {activeTab === 4 && (
          <AccountsTable
            data={WalletsData}
            headData={[
              { name: 'Index', key: 'Index', isInfo: false, isSort: false },
              { name: 'Chart', key: 'Chart', isInfo: false, isSort: true },
              { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true },
              { name: 'Buy Volume', key: 'BuyVolume', isInfo: true, isSort: true },
              { name: 'Paid Fees + Est. Fees', key: 'PaidFees+Est.Fees', isInfo: true, isSort: true },
              { name: 'Income + Floor Value', key: 'Income+FloorValue', isInfo: true, isSort: true },
              { name: 'Gains', key: 'Gains', isInfo: true, isSort: true },
              { name: 'Volume', key: 'Volume', isInfo: true, isSort: true },
            ]}
          />
        )}
      </div>
      {activeTab === 0 && (
        <CollectionModel
          activeTabIndex={activeTab}
          category={true}
          heading={`Watchlist Collections Settings`}
          setShow={setIsModalOpen}
          showCase={true}
          showModal={isModalOpen}
        />
      )}
      {activeTab === 1 && (
        <CollectionModel
          activeTabIndex={activeTab}
          category={true}
          heading={`Watchlist Projects Settings`}
          setShow={setIsModalOpen}
          showCase={true}
          showModal={isModalOpen}
        />
      )}
      {activeTab === 2 && (
        <CollectionModel
          activeTabIndex={activeTab}
          heading={`Watchlist Index Settings`}
          setShow={setIsModalOpen}
          showCase={true}
          showModal={isModalOpen}
        />
      )}
      {activeTab === 3 && (
        <CollectionModel
          activeTabIndex={activeTab}
          heading={`Watchlist Wallet Settings`}
          setShow={setIsModalOpen}
          showCase={true}
          showModal={isModalOpen}
          valueCal={true}
          wallets={true}
        />
      )}
      {activeTab === 4 && (
        <CollectionModel
          activeTabIndex={activeTab}
          heading={`Watchlist Wallet Settings`}
          setShow={setIsModalOpen}
          showCase={true}
          showModal={isModalOpen}
          valueCal={true}
          wallets={true}
        />
      )}
    </div>
  )
}
export default WatchlistTemplate
