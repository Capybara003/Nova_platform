/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { usePathname } from 'next/navigation'
import React, { useMemo, useState } from 'react'

import Button from 'design-systems/Atoms/Button'
import { DownArrow, FilterIcon } from 'design-systems/Atoms/Icons'
import { NoData } from 'design-systems/Atoms/NoData'
import Pagination from 'design-systems/Atoms/Pagination'
import { TopAssets } from 'design-systems/Atoms/TopAssets'
import AnalyticsUpperHeader from 'design-systems/Molecules/AnalyticsUpperHeader'
import { AssetAllocation } from 'design-systems/Molecules/AssetAllocation'
import MarketAnalytics from 'design-systems/Molecules/MarketAnalytics'
import MarketTable from 'design-systems/Molecules/MarketMelecules/MarketTable'
import MarketOverviewIndex from 'design-systems/Molecules/MarketOverviewIndex'
import IndexModal from 'design-systems/Molecules/ModalMolecules/IndexModal'
import OverviewModal from 'design-systems/Molecules/ModalMolecules/OverModal'
import TreeMapModal from 'design-systems/Molecules/ModalMolecules/TreeModal'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import OverviewMarketTree from 'design-systems/Molecules/OverviewMarketTree'
import { TableSkeletan } from 'design-systems/Molecules/Skeletan/TableSkeletan'
import Layout from 'design-systems/Organisms/Layout'
import { useHolding } from 'hooks/apis/useHolding'
import { useDataSelector } from 'lib/redux/store'

const MarketAnaliticsTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const { crypto } = useDataSelector('toggle')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false)
  const [isCheckboxChecked2, setIsCheckboxChecked2] = useState<boolean>(false)
  const { isLoadingHolding, Holding } = useHolding()
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const itemsPerPage = 10 // Set the number of items per page
  const totalItems = Holding?.length
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected)
  }
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const pageCount = Math.ceil(totalItems / itemsPerPage)
  useMemo(() => {
    if (pathname === '/market-analitics') {
      localStorage.setItem('label', 'Market')
    }
  }, [])

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
    setIsModalOpen(false)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <Layout className="flex flex-col gap-[22px]">
      <AnalyticsUpperHeader crypto={crypto} />
      <div className="gap-[22px]">
        <div className="flex h-full flex-col rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px]">
          <div className=" !flex !flex-wrap items-center justify-between gap-[12px] md:!gap-[16px] ">
            {/* <div className="!w-full xsm:!w-auto"> */}
            <NavTabsMolecule
              activeTab={activeTab}
              className="whitespace-nowrap"
              tabs={['Top 50', 'Index', 'Tree Map', 'Analytics']}
              onTabChange={handleTabChange}
            />
            {/* </div> */}
            <div className="!flex !w-full flex-row !flex-wrap gap-[12px] xsm:!flex-nowrap md:!w-auto md:!gap-[16px]">
              <Button
                className="flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 xsm:w-auto"
                onClick={openModal}
              >
                <div>
                  <FilterIcon />
                </div>
                <div>
                  <DownArrow />
                </div>
              </Button>
              {activeTab === 0 || activeTab === 2 ? (
                <TopAssets
                  checked={(activeTab === 0 && isCheckboxChecked) || (activeTab === 2 && isCheckboxChecked2)}
                  label={'My Assets'}
                  onChange={() => {
                    ;(activeTab === 0 && setIsCheckboxChecked(!isCheckboxChecked)) ||
                      (activeTab === 2 && setIsCheckboxChecked2(!isCheckboxChecked2))
                  }}
                />
              ) : null}
            </div>
          </div>
          <div className="mt-[22px] h-full w-full">
            {activeTab === 0 && (
              <div className={`${Holding?.data?.length > 0 ? 'max-h-[500px]' : 'max-h-auto'} overflow-y-auto`}>
                <MarketTable
                  data={Holding?.data?.slice(startIndex, endIndex)}
                  headData={[
                    { name: 'Name', key: 'Name', isInfo: false, isSort: true },
                    { name: 'Price', key: 'Price', isInfo: false, isSort: true },
                    { name: 'Volume', key: 'Volume', isInfo: false, isSort: true },
                    { name: 'Highest Seller', key: 'HighestSeller', isInfo: true, isSort: true },
                    { name: 'Market Cap(MC)', key: 'MarketCap(MC)', isInfo: false, isSort: true },
                  ]}
                />
              </div>
            )}
            {activeTab === 1 && <MarketOverviewIndex activeTab={activeTab} />}
            {activeTab === 2 && <OverviewMarketTree />}
            {activeTab === 3 && <MarketAnalytics />}
          </div>
          {activeTab === 0 && Holding?.length > 9 && (
            <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
          )}
          <div>{activeTab === 3 && <AssetAllocation />}</div>
        </div>
        {activeTab === 0 && <OverviewModal setShow={setIsModalOpen} showModal={isModalOpen} />}
        {activeTab === 1 && <IndexModal setShow={setIsModalOpen} showModal={isModalOpen} />}
        {activeTab === 2 && <TreeMapModal setShow={setIsModalOpen} showModal={isModalOpen} />}
      </div>
    </Layout>
  )
}

export default MarketAnaliticsTemplate
