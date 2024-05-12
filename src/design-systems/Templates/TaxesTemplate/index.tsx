/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useEffect, useMemo, useState } from 'react'
import { CSVLink } from 'react-csv'

import { Graphdata } from '../MarketAnaliticsTemplate/utils'

import Button from 'design-systems/Atoms/Button'
import { BlueDot, DownArrow, EditIcons, ExportIcons, FilterIcon, YellowDot } from 'design-systems/Atoms/Icons'
import { NoData } from 'design-systems/Atoms/NoData'
import Pagination from 'design-systems/Atoms/Pagination'
import Typography from 'design-systems/Atoms/Typography'
import HoldingDataGroup from 'design-systems/Molecules/HoldingMolecules/HoldingDataGroup'
import HoldingDataGroup2 from 'design-systems/Molecules/HoldingMolecules/HoldingDataGroup2'
import { TaxesModel } from 'design-systems/Molecules/ModalMolecules/TaxesModel'
import { TableSkeletan } from 'design-systems/Molecules/Skeletan/TableSkeletan'
import TaxableTaxesTable from 'design-systems/Molecules/TaxesMolecules/TaxableTaxesTable'
import TaxesTable from 'design-systems/Molecules/TaxesMolecules/TaxesTable'
import TwoLineGraph from 'design-systems/Molecules/TwoLineGraph'
import { GraphTwoLineData, taxesHeaders } from 'design-systems/data/data'
import { useTaxes } from 'hooks/apis/useTaxes'
import { useDataSelector } from 'lib/redux/store'

const TaxesTemplate: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<number>(0)
  const { isLoadingTaxesCapital, TaxesCapital, refetchTaxes } = useTaxes()
  const { crypto } = useDataSelector('toggle')

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [taxes, setTaxes] = useState<any>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [currentPage2, setCurrentPage2] = useState<number>(0)
  const itemsPerPage = 10 // Set the number of items per page
  const totalItems = taxes?.data?.length
  const [walletLoading, setWalletLoading] = useState<boolean>(false)
  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected)
  }
  const handlePageChange2 = (selectedItem: { selected: number }) => {
    setCurrentPage2(selectedItem.selected)
  }
  const startIndex = currentPage * itemsPerPage
  const startIndex2 = currentPage2 * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const endIndex2 = startIndex2 + itemsPerPage
  const pageCount = Math.ceil(totalItems / itemsPerPage)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const LocalWallet = localStorage.getItem('walletLoading')
  useEffect(() => {
    if (LocalWallet !== null) {
      setWalletLoading(JSON.parse(LocalWallet))
    }
  }, [LocalWallet])
  useMemo(() => {
    if (TaxesCapital) {
      setTaxes(TaxesCapital)
    }
  }, [TaxesCapital, isLoadingTaxesCapital])
  useMemo(() => refetchTaxes(), [refetchTaxes])

  // const handleTabChange = (tab: number) => {
  //   setActiveTab(tab)
  // }
  return (
    <div className="flex flex-col gap-[22px] font-Lexend">
      <div className="l grid w-full !grid-cols-1 flex-col justify-center  gap-[20px] md:flex-row lg:!grid-cols-7 ">
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
                        5.463,56 {crypto.symbol}
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
      <div className=" flex w-full flex-col gap-[22px] !rounded-md bg-blackCardBg p-[22px] ">
        {/* {walletLoading ? ( */}
        <>
          <Typography className="text-left text-[25px] font-medium ">Taxable Capital Gains</Typography>
          <div className="flex w-full flex-wrap justify-between gap-[22px]">
            <div className="!w-0 md:!w-[231px]"></div>
            <div className=" flex flex-col items-center justify-center text-center ">
              <Typography className="flex items-center gap-3">
                <Typography size="subtitle-25">2023 Tax Report</Typography>
                <DownArrow />
              </Typography>
              <Typography className="flex items-center gap-3">
                <Typography className="text-[14pz] text-black7f">January to 31. December 2023</Typography>
                <EditIcons />
              </Typography>
            </div>
            {/* <div className="flex w-full !flex-wrap items-center justify-between gap-[22px]"> */}
            {/* <div className="!w-full xsm:overflow-y-auto md:!w-auto">
            <NavTabsMolecule activeTab={activeTab} tabs={['Revenue Cal.', 'Taxes']} onTabChange={handleTabChange} />
          </div> */}
            <div className="flex h-fit w-full flex-row gap-[16px] md:!w-auto">
              {taxes?.data && (
                <CSVLink
                  data={taxes?.data?.map((item: any) => ({
                    name: item.name,
                    amount: item.amount,
                    price: item.buyPrice,
                    fees: item.fee,
                    income: item.income,
                    grains: item.realizedGains,
                    shortTerm: '',
                    longTerm: '',
                    holdingTime: item.holdingTime,
                    link: item.link,
                  }))}
                  filename={`taxes.csv`}
                  headers={taxesHeaders}
                >
                  <Button className="flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-3 md:w-auto ">
                    <Typography className="w-max">Export CSV</Typography>
                    <ExportIcons />
                  </Button>
                </CSVLink>
              )}
              <Button
                className="flex w-full flex-row items-center justify-center gap-2 rounded-[6px] bg-blackCardBg p-2 md:w-auto"
                onClick={() => openModal()}
              >
                <FilterIcon />
                <DownArrow />
              </Button>
            </div>
            {/* </div> */}
          </div>
          {/* {activeTab === 0 && ( */}
          <>
            <div className={`${taxes?.data?.length > 0 ? 'max-h-[599px]' : 'max-h-auto'}  overflow-auto pe-[12px]`}>
              <TaxesTable
                crypto={crypto}
                data={taxes?.data?.slice(startIndex, endIndex)}
                footerData={taxes}
                headData={[
                  { name: 'Name', key: 'Name', isInfo: false, isSort: true },
                  { name: 'Amount', key: 'Amount', isInfo: false, isSort: true },
                  { name: 'Buy Price', key: 'BuyPrice', isInfo: false, isSort: true },
                  { name: 'Paid Fees', key: 'PaidFees', isInfo: false, isSort: true },
                  { name: 'Income', key: 'Income', isInfo: false, isSort: true },
                  { name: 'Gains', key: 'Gains', isInfo: false, isSort: true },
                  { name: 'Short Term', key: 'ShortTerm', isInfo: false, isSort: true },
                  { name: 'Long Term', key: 'LongTerm', isInfo: true, isSort: true },
                  { name: 'Holding Time', key: 'HoldingTime', isInfo: false, isSort: true },
                  { name: 'Link', key: 'Link', isInfo: false, isSort: false },
                ]}
                loading={isLoadingTaxesCapital}
              />
            </div>
            {taxes?.data?.length < 9 && <Pagination pageCount={pageCount} onPageChange={handlePageChange} />}
          </>

          {/* )} */}
          {/* {activeTab === 1 && (
          <TaxesTable
            data={TaxesData1}
            headData={[
              'Name',
              'Amount',
              'Buy Price',
              'Paid Fees',
              'Income',
              'Gains',
              'Short Term',
              'Long Term',
              'Holding Time',
              'Link',
            ]}
          />
        )} */}
        </>
        {/* ) : (
          <NoData label="No Wallet Connect" />
        )} */}
      </div>
      {/* {walletLoading && ( */}
      <div className=" flex w-full flex-col gap-[22px] !rounded-md bg-blackCardBg p-[22px] ">
        <Typography className="text-left text-[25px] font-medium ">Taxable Income</Typography>
        <div className={`${taxes?.data?.length > 0 ? 'max-h-[599px]' : 'max-h-auto'}   overflow-auto pe-[12px]`}>
          {/* {activeTab === 0 && ( */}
          <TaxableTaxesTable
            data={taxes?.data?.slice(startIndex2, endIndex2)}
            footerData={taxes}
            headData={[
              { name: 'Name', key: 'Name', isInfo: false, isSort: true },
              { name: 'Amount', key: 'Amount', isInfo: false, isSort: true },
              { name: 'Exchange Rate On Receive Date', key: 'ExchangeRateOnReceiveDate', isInfo: false, isSort: true },
              { name: 'Income', key: 'Income', isInfo: true, isSort: true },
              { name: 'Paid Fees', key: 'PaidFees', isInfo: false, isSort: true },
              { name: 'Gains On Receive Date', key: 'GainsOnReceiveDate', isInfo: false, isSort: true },
              { name: 'Receive Date', key: 'ReceiveDate', isInfo: false, isSort: true },
              { name: 'Link', key: 'Link', isInfo: false, isSort: false },
            ]}
            loading={isLoadingTaxesCapital}
          />

          {/* )} */}
          {/* {activeTab === 1 && (
            <TaxableTaxesTable
              data={TaxableTaxesData1}
              headData={[
                'Name',
                'Amount',
                'Exchange Rate On Receive Date',
                'Income',
                'Paid Fees',
                'Gains On Receive Date',
                'Receive Date',
                'Link',
              ]}
            />
          )} */}
        </div>
        {taxes?.data?.length > 9 && <Pagination pageCount={pageCount} onPageChange={handlePageChange2} />}
      </div>
      {/* )} */}
      <TaxesModel setShow={setIsModalOpen} showModal={isModalOpen} />
    </div>
  )
}

export default TaxesTemplate
