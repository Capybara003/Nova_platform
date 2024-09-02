/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { TETooltip } from 'tw-elements-react'
import { IoArrowBack } from 'react-icons/io5'

import AnalyticsBottomSection from './AnalyticsBottomSection'
import { HoldingPageData } from './interface'

import Web3Modal from 'context/WagmiModalProvider'
import Button from 'design-systems/Atoms/Button'
import { BlueDot, DownArrow, FilterIcon, YellowDot } from 'design-systems/Atoms/Icons'
import { NoData } from 'design-systems/Atoms/NoData'
import Pagination from 'design-systems/Atoms/Pagination'
import Typography from 'design-systems/Atoms/Typography'
import ExportPopOver from 'design-systems/Molecules/ExportPopOver'
import HoldingAnalyticsTable from 'design-systems/Molecules/HoldingMolecules/HoldingAnalyticsTable'
import HoldingDataGroup from 'design-systems/Molecules/HoldingMolecules/HoldingDataGroup'
import HoldingDataGroup2 from 'design-systems/Molecules/HoldingMolecules/HoldingDataGroup2'
import HoldingIndexTable from 'design-systems/Molecules/HoldingMolecules/HoldingIndexTable'
import HoldingTable from 'design-systems/Molecules/HoldingMolecules/HoldingTable'
import HoldingTotalTable from 'design-systems/Molecules/HoldingMolecules/HoldingTotalTable'
import HoldingModal from 'design-systems/Molecules/ModalMolecules/HoldingModal'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import { TableSkeletan } from 'design-systems/Molecules/Skeletan/TableSkeletan'
import TwoLineGraph from 'design-systems/Molecules/TwoLineGraph'
import { GraphTwoLineData } from 'design-systems/data/data'
import { useHolding } from 'hooks/apis/useHolding'
import { useDataSelector } from 'lib/redux/store'
import useWindowWidth from 'hooks/useWindowWidth'
import { formatUnits, formatUSei } from 'utils/formatUnit'

const HoldingPageTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [walletLoading, setWalletLoading] = useState<boolean>(false)
  const {
    isLoadingHoldingNfts,
    HoldingNfts,
    isLoadingIncomeNfts,
    IncomeNfts,
    refetchHoldingNfts,
    isFetchingHoldingNfts,
    isLoadingHoldingTokens,
    HoldingTokens,
    refetchHoldingTokens,
  } = useHolding()

  const [soldDetail, setSoldDetails] = useState<any>({})
  const [HoldingGraphData, setHoldingGraphData] = useState<any>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const itemsPerPage = 10
  const LocalWallet = localStorage.getItem('walletLoading')

  const width = useWindowWidth()

  const { crypto, tabName } = useDataSelector('toggle')


  useEffect(() => {
    if (LocalWallet !== null) {
      setWalletLoading(JSON.parse(LocalWallet))
    }
  }, [LocalWallet])

  useEffect(() => {
    setCurrentPage(0)
  }, [tabName])

  const holdingData = useMemo(() => {
    return {
      nfts: HoldingNfts?.reduce((res, collection) => {
        const contracts = res.map((one: any) => one.contract)
        const index = contracts.indexOf(collection.contract)
        if (index !== -1) {
          res[index].nftsHolding = [... new Set([...res[index].nftsHolding, ...collection.nftsHolding])]
        } else {
          res.push(collection)
        }
        return res
      }, []) ?? [],
      tokens: HoldingTokens ?? [],
    }
  }, [HoldingNfts, isLoadingHoldingNfts, HoldingTokens, isLoadingHoldingTokens])

  const incomeData = useMemo(() => {
    return {
      nfts: IncomeNfts ?? [],
      tokens: [],
    }
  }, []);

  const totalData = useMemo(() => {
    return {
      nfts: [...HoldingNfts ?? [], ...IncomeNfts ?? []],
      tokens: []
    }
  }, [HoldingNfts, isLoadingHoldingNfts, IncomeNfts, isLoadingIncomeNfts])

  const totalItems = useMemo(
    () => (activeTab === 0 ? HoldingNfts?.length ?? 0 : activeTab === 1 ? IncomeNfts?.length ?? 0 : totalData.nfts.length),
    [activeTab, HoldingNfts?.length, IncomeNfts?.length]
  )

  const incomeTotalValue = useMemo(() => {
    return (
      IncomeNfts &&
      IncomeNfts.length > 0 &&
      IncomeNfts.reduce((acc: any, item: any) => {
        acc = (acc || 0) + (formatUSei(item?.floorPrice) * item?.incomeNfts?.length || 0)
        return acc
      }, 0)
    )
  }, [IncomeNfts])

  const holdingTotalValue = useMemo(() => {
    return {
      nfts:
        HoldingNfts &&
        HoldingNfts.length > 0 &&
        HoldingNfts.reduce((acc: any, item: any) => {
          acc = (acc || 0) + (formatUSei(item?.floorPrice) * item?.nftsHolding?.length || 0)
          return acc
        }, 0),
      tokens:
        HoldingTokens &&
        HoldingTokens.length > 0 &&
        HoldingTokens.reduce((acc: any, item: any) => {
          acc = (acc || 0) + (formatUnits(item?.worthUsei, 6) || 0)
          return acc
        }, 0),
    }
  }, [HoldingNfts, HoldingTokens])


  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const pageCount = Math.ceil(totalItems / itemsPerPage)


  const handlePageChange = ({ selected }: { selected: number }) => setCurrentPage(selected)

  const handleTabChange = (tab: number) => {
    setActiveTab(tab)
    setCurrentPage(0)
  }

  const openModal = () => setIsModalOpen(true)
  const DataLength = holdingData.nfts?.length || incomeData.nfts?.length

  return (
    <>
      <Web3Modal>
        <div className="flex flex-col font-Lexend">
          <div
            className={`grid !grid-cols-1 flex-col justify-center gap-[20px] md:flex-row lg:!grid-cols-7 ${width < 768 ? 'h-[600px] overflow-hidden' : ''
              }`}
          >
            {width > 768 && <HoldingDataGroup />}
            <div className="w-full rounded-[12px] bg-blackCardBg p-2 md:!rounded-md md:!p-[22px] lg:col-span-3">
              <div className="flex w-full flex-col gap-8">
                <div className="!rounded-xs bg-blackCardBg">
                  <div className="flex !flex-col gap-14 overflow-hidden overflow-ellipsis whitespace-nowrap p-[18px] md:!flex-row md:items-center">
                    {!isLoadingHoldingNfts ? (
                      <>
                        {[
                          {
                            color: 'Yellow',
                            label: 'Holdings',
                            amount: soldDetail?.holdingDetails?.holdings,
                            per: soldDetail?.holdingDetails?.percentageForHoldings,
                          },
                          {
                            color: 'Blue',
                            label: 'Gains',
                            amount: soldDetail?.holdingDetails?.grains,
                            per: soldDetail?.holdingDetails?.percentageForGrains,
                          },
                        ].map(({ color, label, amount, per }) => (
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
                            <div>
                              <TETooltip title={`${amount / crypto.value} ${crypto.symbol}`}>
                                <Typography
                                  className="font-Poppins overflow-hidden overflow-ellipsis whitespace-nowrap font-normal"
                                  size="h3"
                                >
                                  {amount ? (
                                    <>
                                      {' '}
                                      {amount / crypto.value} {crypto.symbol}
                                    </>
                                  ) : (
                                    '--'
                                  )}
                                </Typography>
                              </TETooltip>
                              <div>
                                <TETooltip title={`${per / crypto.value}%`}>
                                  <Typography
                                    className={`font-Poppins overflow-hidden overflow-ellipsis whitespace-nowrap font-normal ${per < 0 ? 'text-warning-300' : 'text-green'
                                      }`}
                                    size="paragraph"
                                  >
                                    {per ? <>{per === null ? '0.00%' : `${per / crypto.value}%`}</> : '--'}
                                  </Typography>
                                </TETooltip>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <TableSkeletan limit={3} />
                    )}
                  </div>
                </div>
                <div style={{ height: width > 768 ? '500px' : '300px' }}>
                  <TwoLineGraph
                    data={GraphTwoLineData.items}
                    height={'100%'}
                    hideXAxis={false}
                    lineColor="#6F1ED7"
                    lineColor2="#CE9136"
                    lineKeys={[
                      {
                        key: 'holding',
                        strokeColor: '#CE9136',
                      },
                      {
                        key: 'gains',
                        strokeColor: '#6F1ED7',
                      },
                    ]}
                    lineWidth={2}
                    width="100%"
                    xKey="date"
                    yKey="quantity"
                  />
                </div>
              </div>
            </div>
            {width > 768 && <HoldingDataGroup2 />}
          </div>

          {width < 768 && (
            <div className="mt-6 rounded-[12px] bg-blackCardBg p-2 md:!rounded-md">
              <Button
                className="flex w-full flex-row rounded-xs bg-gradint-dark-pink p-[2px]"
                onClick={() => {
                  setIsOpenModal(true)
                  document.body.style.overflow = 'hidden'
                }}
              >
                <Typography className="flex h-full w-full items-center justify-center gap-2  rounded-xs bg-bg25  px-8 py-3 text-sm font-medium text-[#E8E1E1]">
                  View More Details
                </Typography>
              </Button>
            </div>
          )}

          {isOpenModal && (
            <div className="absolute left-0 top-[62px] z-[999] w-full overflow-scroll bg-blackBg p-6">
              <div className="my-6">
                <Button
                  className="flex w-full items-center justify-center gap-1 rounded bg-blackCardBg p-2 text-sm font-medium text-[#E8E1E1]"
                  onClick={() => {
                    setIsOpenModal(false)
                    document.body.style.overflow = 'auto'
                  }}
                >
                  <IoArrowBack />
                  Go Back
                </Button>
              </div>
              <HoldingDataGroup />
              <div className="mt-6">
                <HoldingDataGroup2 />
              </div>
            </div>
          )}

          <div className="mt-6 w-full">
            <div className="flex flex-col gap-[12px] rounded-[12px] bg-blackCardBg p-2 md:gap-[22px] md:!rounded-md md:!px-[22px] md:!py-[15px]">
              <div className="flex flex-col items-center justify-between gap-[12px] pe-[12px] md:flex-row">
                <div className="">
                  <NavTabsMolecule
                    activeTab={activeTab}
                    className="w-full !bg-[#181620]"
                    classNameInner="!bg-[#181620]"
                    tabs={['Holding', 'Income', 'Total', 'Analytics']}
                    onTabChange={handleTabChange}
                  />
                </div>
                <div className="flex flex-row justify-end gap-[16px]">
                  <ExportPopOver
                    data={
                      activeTab === 0
                        ? holdingData.nfts
                        : activeTab === 1
                          ? incomeData.nfts
                          : activeTab === 2
                            ? totalData.nfts
                            : activeTab === 3
                              ? holdingData.nfts
                              : []
                    }
                    filename="data"
                    // headers={activeTab === 0 ? holdingData : activeTab === 1 ? incomeData : holdingHeaders}
                    tableIdForPdf="holding-table"
                  />
                  {activeTab !== 3 && (
                    <Button
                      className="flex w-[106px] flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 md:!w-fit"
                      onClick={openModal}
                    >
                      <FilterIcon />
                      <DownArrow />
                    </Button>
                  )}
                </div>
              </div>
              {tabName === 0 && (
                <div>
                  <div className={` ${DataLength > 0 ? 'max-h-[500px]' : 'max-h-auto'}  overflow-y-auto pe-[12px]`}>
                    {activeTab === 0 && (
                      <>
                        <HoldingTable
                          crypto={crypto}
                          data={holdingData.nfts?.slice(startIndex, endIndex)}
                          footerData={holdingData.nfts}
                          headData={[
                            { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                            { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                            { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Rank', key: 'Rank', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Est. Fees', key: 'EstFees', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true, width: '150px' },
                            {
                              name: 'Unrealized Gains',
                              key: 'UnrealizedGains',
                              isInfo: true,
                              isSort: false,
                              width: '200px',
                            },
                            { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                          ]}
                          loading={isLoadingHoldingNfts}
                          totalValue={holdingTotalValue.nfts || 0}
                        />
                      </>
                    )}

                    {activeTab === 1 && (
                      <>
                        <HoldingIndexTable
                          crypto={crypto}
                          data={incomeData.nfts?.slice(startIndex, endIndex)}
                          footerData={incomeData.nfts}
                          headData={[
                            { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                            { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                            { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Rarity', key: 'Rarity', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Paid Fees', key: 'PaidFees', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Income', key: 'Income', isInfo: false, isSort: true, width: '150px' },
                            {
                              name: 'Realized Gains',
                              key: 'RealizedGains',
                              isInfo: true,
                              isSort: false,
                              width: '200px',
                            },
                            { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                          ]}
                          loading={isLoadingIncomeNfts}
                          totalValue={incomeTotalValue}
                        />
                      </>
                    )}
                    {activeTab === 2 && (
                      <HoldingTotalTable
                        crypto={crypto}
                        data={totalData.nfts.slice(startIndex, endIndex)}
                        headData={[
                          { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                          { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                          { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Rarity', key: 'Rarity', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                          {
                            name: 'Est. Fees + Paid Fees',
                            key: 'EstFeesPaidFees',
                            isInfo: false,
                            isSort: false,
                            width: '200px',
                          },
                          {
                            name: 'Floor Value + Income',
                            key: 'FloorValueIncome',
                            isInfo: false,
                            isSort: false,
                            width: '200px',
                          },
                          { name: 'Gains', key: 'Gains', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '105px' },
                          { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                        ]}
                        totalValue={holdingTotalValue + incomeTotalValue}
                      />
                    )}
                    {activeTab === 3 && (
                      <HoldingAnalyticsTable
                        crypto={crypto}
                        data={holdingData.nfts?.slice(startIndex, endIndex)}
                        headData={[
                          { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                          { name: 'Amount', key: 'Amount', isInfo: false, isSort: true, width: '70px' },
                          { name: 'Weight', key: 'Weight', isInfo: false, isSort: true, width: '100px' },
                          { name: 'Floor', key: 'Floor', isInfo: false, isSort: true, width: '100px' },
                          { name: 'Rank', key: 'Rank', isInfo: true, isSort: true, width: '100px' },
                          { name: 'Buy Price', key: 'BuyPrice', isInfo: true, isSort: true, width: '150px' },
                          { name: 'Est. Fees', key: 'EstFees', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Floor Value', key: 'FloorValue', isInfo: true, isSort: true, width: '150px' },
                          {
                            name: 'Unrealized Gains',
                            key: 'UnrealizedGains',
                            isInfo: true,
                            isSort: true,
                            width: '200px',
                          },
                          { name: 'Since Trade', key: 'SinceTrade', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Holding Time', key: 'HoldingTime', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Link', key: 'Link', isInfo: false, isSort: true, width: '70px' },
                        ]}
                        loading={isLoadingHoldingNfts}
                        totalValue={holdingTotalValue.nfts || 0}
                      />
                    )}
                  </div>
                  {((holdingData.nfts?.length > 9 && activeTab === 0) ||
                    (incomeData.nfts?.length > 9 && activeTab === 1) ||
                    (totalData.nfts.length > 9 && activeTab === 2) ||
                    (holdingData.nfts.length > 9 && activeTab === 3)) && (
                      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
                    )}
                </div>
              )}
              {tabName === 1 && (
                <div>
                  <div className={` ${DataLength > 0 ? 'max-h-[500px]' : 'max-h-auto'}  overflow-y-auto pe-[12px]`}>
                    {activeTab === 0 && (
                      <>
                        <HoldingTable
                          crypto={crypto}
                          data={holdingData.nfts?.slice(startIndex, endIndex)}
                          footerData={holdingData.nfts}
                          headData={[
                            { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                            { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                            { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Rank', key: 'Rank', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Est. Fees', key: 'EstFees', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true, width: '150px' },
                            {
                              name: 'Unrealized Gains',
                              key: 'UnrealizedGains',
                              isInfo: true,
                              isSort: false,
                              width: '200px',
                            },
                            { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                          ]}
                          loading={isLoadingHoldingNfts}
                          totalValue={holdingTotalValue.nfts || 0}
                        />
                      </>
                    )}

                    {activeTab === 1 && (
                      <>
                        <HoldingIndexTable
                          crypto={crypto}
                          data={incomeData.nfts?.slice(startIndex, endIndex)}
                          footerData={incomeData.nfts}
                          headData={[
                            { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                            { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                            { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Rarity', key: 'Rarity', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Paid Fees', key: 'PaidFees', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Income', key: 'Income', isInfo: false, isSort: true, width: '150px' },
                            {
                              name: 'Realized Gains',
                              key: 'RealizedGains',
                              isInfo: true,
                              isSort: false,
                              width: '200px',
                            },
                            { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                          ]}
                          loading={isLoadingIncomeNfts}
                          totalValue={incomeTotalValue}
                        />
                      </>
                    )}
                    {activeTab === 2 && (
                      <HoldingTotalTable
                        crypto={crypto}
                        data={totalData.nfts.slice(startIndex, endIndex)}
                        headData={[
                          { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                          { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                          { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Rarity', key: 'Rarity', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                          {
                            name: 'Est. Fees + Paid Fees',
                            key: 'EstFeesPaidFees',
                            isInfo: false,
                            isSort: false,
                            width: '200px',
                          },
                          {
                            name: 'Floor Value + Income',
                            key: 'FloorValueIncome',
                            isInfo: false,
                            isSort: false,
                            width: '200px',
                          },
                          { name: 'Gains', key: 'Gains', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '105px' },
                          { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                        ]}
                        totalValue={holdingTotalValue + incomeTotalValue}
                      />
                    )}
                    {activeTab === 3 && (
                      <HoldingAnalyticsTable
                        crypto={crypto}
                        data={holdingData.nfts?.slice(startIndex, endIndex)}
                        headData={[
                          { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                          { name: 'Amount', key: 'Amount', isInfo: false, isSort: true, width: '70px' },
                          { name: 'Weight', key: 'Weight', isInfo: false, isSort: true, width: '100px' },
                          { name: 'Floor', key: 'Floor', isInfo: false, isSort: true, width: '100px' },
                          { name: 'Rank', key: 'Rank', isInfo: true, isSort: true, width: '100px' },
                          { name: 'Buy Price', key: 'BuyPrice', isInfo: true, isSort: true, width: '150px' },
                          { name: 'Est. Fees', key: 'EstFees', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Floor Value', key: 'FloorValue', isInfo: true, isSort: true, width: '150px' },
                          {
                            name: 'Unrealized Gains',
                            key: 'UnrealizedGains',
                            isInfo: true,
                            isSort: true,
                            width: '200px',
                          },
                          { name: 'Since Trade', key: 'SinceTrade', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Holding Time', key: 'HoldingTime', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Link', key: 'Link', isInfo: false, isSort: true, width: '70px' },
                        ]}
                        loading={isLoadingHoldingNfts}
                        totalValue={holdingTotalValue.nfts || 0}
                      />
                    )}
                  </div>
                  {((holdingData.nfts?.length > 9 && activeTab === 0) ||
                    (incomeData.nfts?.length > 9 && activeTab === 1) ||
                    (totalData.nfts.length > 9 && activeTab === 2) ||
                    (holdingData.nfts.length > 9 && activeTab === 3)) && (
                      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
                    )}
                </div>
              )}
              {tabName === 2 && (
                <div>
                  <div className={` ${DataLength > 0 ? 'max-h-[500px]' : 'max-h-auto'}  overflow-y-auto pe-[12px]`}>
                    {activeTab === 0 && (
                      <>
                        <HoldingTable
                          crypto={crypto}
                          data={holdingData.tokens?.slice(startIndex, endIndex)}
                          footerData={holdingData.tokens}
                          headData={[
                            { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                            { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                            { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Rank', key: 'Rank', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Est. Fees', key: 'EstFees', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor Value', key: 'FloorValue', isInfo: false, isSort: true, width: '150px' },
                            {
                              name: 'Unrealized Gains',
                              key: 'UnrealizedGains',
                              isInfo: true,
                              isSort: false,
                              width: '200px',
                            },
                            { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                          ]}
                          loading={isLoadingHoldingTokens}
                          totalValue={holdingTotalValue.tokens}
                        />
                      </>
                    )}

                    {activeTab === 1 && (
                      <>
                        <HoldingIndexTable
                          crypto={crypto}
                          data={incomeData.tokens?.slice(startIndex, endIndex)}
                          footerData={incomeData.tokens}
                          headData={[
                            { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                            { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                            { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Rarity', key: 'Rarity', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Paid Fees', key: 'PaidFees', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Income', key: 'Income', isInfo: false, isSort: true, width: '150px' },
                            {
                              name: 'Realized Gains',
                              key: 'RealizedGains',
                              isInfo: true,
                              isSort: false,
                              width: '200px',
                            },
                            { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '100px' },
                            { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                          ]}
                          loading={isLoadingIncomeNfts}
                          totalValue={incomeTotalValue}
                        />
                      </>
                    )}
                    {activeTab === 2 && (
                      <HoldingTotalTable
                        crypto={crypto}
                        data={totalData.tokens.slice(startIndex, endIndex)}
                        headData={[
                          { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                          { name: 'Amount', key: 'Amount', isInfo: false, isSort: false, width: '70px' },
                          { name: 'Weight', key: 'Weight', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Floor', key: 'Floor', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Rarity', key: 'Rarity', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: false, width: '100px' },
                          {
                            name: 'Est. Fees + Paid Fees',
                            key: 'EstFeesPaidFees',
                            isInfo: false,
                            isSort: false,
                            width: '200px',
                          },
                          {
                            name: 'Floor Value + Income',
                            key: 'FloorValueIncome',
                            isInfo: false,
                            isSort: false,
                            width: '200px',
                          },
                          { name: 'Gains', key: 'Gains', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Since Trade', key: 'SinceTrade', isInfo: false, isSort: false, width: '100px' },
                          { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: false, width: '105px' },
                          { name: 'Link', key: 'Link', isInfo: false, isSort: false, width: '70px' },
                        ]}
                        totalValue={holdingTotalValue + incomeTotalValue}
                      />
                    )}
                    {activeTab === 3 && (
                      <HoldingAnalyticsTable
                        crypto={crypto}
                        data={holdingData.tokens?.slice(startIndex, endIndex)}
                        headData={[
                          { name: 'Name', key: 'Name', isInfo: false, isSort: false, width: '210px' },
                          { name: 'Amount', key: 'Amount', isInfo: false, isSort: true, width: '70px' },
                          { name: 'Weight', key: 'Weight', isInfo: false, isSort: true, width: '100px' },
                          { name: 'Floor', key: 'Floor', isInfo: false, isSort: true, width: '100px' },
                          { name: 'Rank', key: 'Rank', isInfo: true, isSort: true, width: '100px' },
                          { name: 'Buy Price', key: 'BuyPrice', isInfo: true, isSort: true, width: '150px' },
                          { name: 'Est. Fees', key: 'EstFees', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Floor Value', key: 'FloorValue', isInfo: true, isSort: true, width: '150px' },
                          {
                            name: 'Unrealized Gains',
                            key: 'UnrealizedGains',
                            isInfo: true,
                            isSort: true,
                            width: '200px',
                          },
                          { name: 'Since Trade', key: 'SinceTrade', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Holding Time', key: 'HoldingTime', isInfo: true, isSort: true, width: '200px' },
                          { name: 'Link', key: 'Link', isInfo: false, isSort: true, width: '70px' },
                        ]}
                        loading={isLoadingHoldingTokens}
                        totalValue={holdingTotalValue.tokens}
                      />
                    )}
                  </div>
                  {((holdingData.tokens?.length > 9 && activeTab === 0) ||
                    (incomeData.tokens?.length > 9 && activeTab === 1) ||
                    (totalData.tokens.length > 9 && activeTab === 2) ||
                    (holdingData.tokens.length > 9 && activeTab === 3)) && (
                      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
                    )}
                </div>
              )}
            </div>
          </div>

          {activeTab === 3 && (
            <>
              <AnalyticsBottomSection />
            </>
          )}
        </div>
      </Web3Modal>

      <HoldingModal setShow={setIsModalOpen} showModal={isModalOpen} />
    </>
  )
}

export default HoldingPageTemplate
