/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import { RxCaretSort } from 'react-icons/rx'

import { GraphData2 } from '../MarketAnaliticsTemplate/utils'
import DonutWithTableChart from '../SingleCollectionTradesTemplate/NftTabSection/AnalyticsTab/DonutWithTableChart'
import { portfolioProfitTableData, portfolioProfitTableKey } from '../SingleTokenTemplate/utils'

import DynamicDonutChart from 'design-systems/Molecules/DynamicDonutChart'
import { IMG } from 'assets/images'
import CustomBarChart from 'design-systems/Molecules/BarChart'
import NegativeChart from 'design-systems/Molecules/NegativeChart'
import RealTimeNftTable from 'design-systems/Molecules/Table/RealTimeNftTable'
import Typography from 'design-systems/Atoms/Typography'
import { BookMarkEmpty, InfoIcons } from 'design-systems/Atoms/Icons'
import NavTabsMolecule from 'design-systems/Molecules/NavTabs/NavTabsMolecule'
import Table from 'design-systems/Atoms/Table'
import { useHolding } from 'hooks/apis/useHolding'
import { formatUnits, formatUSei } from 'utils/formatUnit'
import { useDataSelector } from 'lib/redux/store'

const AnalyticsBottomSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeTabOfAssetAllocation, setActiveTabOfAssetAllocation] = useState<number>(0)
  const [activeTabOfTransaction, setActiveTabOfTransaction] = useState<number>(0)
  const [activeTabOfVolume, setActiveTabOfVolume] = useState<number>(0)
  const [activeTabOfTotalVolume, setActiveTabOfTotalVolume] = useState<number>(0)

  const { tabName } = useDataSelector('toggle')

  const {
    isLoadingHoldingNfts,
    HoldingNfts,
    isLoadingNftsTopGainer,
    NftsTopGainer,
    isLoadingNftTradeInfo,
    NftTradeInfo,
    isLoadingHoldingTokens,
    HoldingTokens,
    isLoadingTokensTopGainer,
    TokensTopGainer,
    isLoadingTokenTradeInfo,
    TokenTradeInfo,
  } = useHolding()

  const holdingData = useMemo(() => {
    return {
      nfts:
        HoldingNfts?.reduce((res, collection) => {
          const contracts = res.map((one: any) => one.contract)
          const index = contracts.indexOf(collection.contract)
          if (index !== -1) {
            res[index].nftsHolding = [...new Set([...res[index].nftsHolding, ...collection.nftsHolding])]
          } else {
            res.push(collection)
          }
          return res
        }, []) ?? [],
      tokens: HoldingTokens ?? [],
    }
  }, [HoldingNfts, isLoadingHoldingNfts, HoldingTokens, isLoadingHoldingTokens])

  const collectionChartData = useMemo(() => {
    return {
      nfts:
        !isLoadingHoldingNfts &&
        HoldingNfts &&
        HoldingNfts.length > 0 &&
        HoldingNfts.reduce(
          (acc: any, item: any) => {
            const info =
              item?.nftsHolding &&
              item?.nftsHolding?.reduce((acc: any, nft: any) => {
                acc = (acc || 0) + formatUSei(nft?.floorPrice) || 0
                return acc
              }, 0)

            acc['total'] = (acc['total'] || 0) + (info || 0)

            if (acc['collections'] === undefined) {
              acc['collections'] = {}
            }
            acc['collections'][item.name] = (acc['collections'][item.name] || 0) + info

            return acc
          },
          { total: 0, collections: {} }
        ),
      tokens:
        !isLoadingHoldingTokens &&
        HoldingTokens &&
        HoldingTokens.length > 0 &&
        HoldingTokens.reduce(
          (acc: any, item: any) => {
            acc['total'] = (acc['total'] || 0) + (formatUnits(item.worthUsei, 6) || 0)

            if (acc['collections'] === undefined) {
              acc['collections'] = {}
            }
            acc['collections'][item.name] = (acc['collections'][item.name] || 0) + formatUnits(item.worthUsei, 6)

            return acc
          },
          { total: 0, collections: {} }
        ),
    }
  }, [HoldingNfts, isLoadingHoldingNfts, HoldingTokens, isLoadingHoldingTokens])

  const NftTradeData = useMemo(() => {
    return NftTradeInfo?.reduce((acc, item) => {
      if (acc === undefined) acc = {}
      if (acc.ageOfNftAssets === undefined) acc.ageOfNftAssets = {}
      acc.ageOfNftAssets.level1 = [...(acc.ageOfNftAssets.level1 ?? []), ...(item?.ageOfNftAssets?.level1 ?? [])]
      acc.ageOfNftAssets.level2 = [...(acc.ageOfNftAssets.level2 ?? []), ...(item?.ageOfNftAssets?.level2 ?? [])]
      acc.ageOfNftAssets.level3 = [...(acc.ageOfNftAssets.level3 ?? []), ...(item?.ageOfNftAssets?.level3 ?? [])]
      acc.ageOfNftAssets.level4 = [...(acc.ageOfNftAssets.level4 ?? []), ...(item?.ageOfNftAssets?.level4 ?? [])]
      acc.ageOfNftAssets.level5 = [...(acc.ageOfNftAssets.level5 ?? []), ...(item?.ageOfNftAssets?.level5 ?? [])]
      acc.ageOfNftAssets.level6 = [...(acc.ageOfNftAssets.level6 ?? []), ...(item?.ageOfNftAssets?.level6 ?? [])]
    }, {})
  }, [NftTradeInfo, isLoadingNftTradeInfo])

  const timeChartData = useMemo(() => {
    return (
      !isLoadingNftTradeInfo &&
      NftTradeInfo &&
      NftTradeInfo.reduce((acc, item) => {
        if (item?.ageOfNftAssets) {
          const res = Object.values(item.ageOfNftAssets)
            .flat()
            .reduce((acc: any, item: any) => {
              const time = (new Date().getTime() - new Date(item.ts).getTime()) / 1000
              acc['total'] = Number((acc['total'] || 0) + (time / 3600 / 24 || 0))
              acc['count'] = Number((acc['count'] || 0) + 1)
              return acc
            }, {}) as any

          acc['total'] = Number((acc['total'] || 0) + res?.total ?? 0)
          acc['count'] = Number((acc['count'] || 0) + res?.count ?? 0)
        }
        return acc
      }, {})
    )
  }, [HoldingNfts, isLoadingHoldingNfts])

  const transactionChartData = useMemo(() => {
    return {
      nfts: !isLoadingNftTradeInfo &&
        NftTradeInfo && {
          0: NftTradeInfo.reduce((acc, item) => {
            item?.transaction &&
              Object.keys(item.transaction.day)
                .sort((a, b) => new Date(a.replaceAll('_', '-')).getTime() - new Date(b.replaceAll('_', '-')).getTime())
                .map(day => {
                  const transaction = item.transaction.day[day]

                  const days = acc.map((one: any) => one.day)
                  const index = days.indexOf(day)

                  if (index !== -1) {
                    acc[index].totalVolume += transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0
                    acc[index].transactionAmount += transaction?.transactionAmount ?? 0
                  } else {
                    acc.push({
                      day,
                      totalVolume: transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0,
                      transactionAmount: transaction?.transactionAmount ?? 0,
                    })
                  }
                })
            return acc
          }, []),
          1: NftTradeInfo.reduce((acc, item) => {
            item?.transaction &&
              Object.keys(item.transaction.week).map(week => {
                const transaction = item.transaction.week[week]

                const days = acc.map((one: any) => one.day)
                const index = days.indexOf(week)

                if (index !== -1) {
                  acc[index].totalVolume += transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0
                  acc[index].transactionAmount += transaction?.transactionAmount ?? 0
                } else {
                  acc.push({
                    day: week,
                    totalVolume: transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0,
                    transactionAmount: transaction?.transactionAmount ?? 0,
                  })
                }
              })
            return acc
          }, []),
          2: NftTradeInfo.reduce((acc, item) => {
            item?.transaction &&
              Object.keys(item.transaction.month).map(month => {
                const transaction = item.transaction.month[month]

                const days = acc.map((one: any) => one.day)
                const index = days.indexOf(month)

                if (index !== -1) {
                  acc[index].totalVolume += transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0
                  acc[index].transactionAmount += transaction?.transactionAmount ?? 0
                } else {
                  acc.push({
                    day: month,
                    totalVolume: transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0,
                    transactionAmount: transaction?.transactionAmount ?? 0,
                  })
                }
              })
            return acc
          }, []),
        },
      tokens: !isLoadingTokenTradeInfo &&
        TokenTradeInfo && {
          0: TokenTradeInfo.reduce((acc, item) => {
            item.all &&
              Object.keys(item.all.day)
                .sort((a, b) => new Date(a.replaceAll('_', '-')).getTime() - new Date(b.replaceAll('_', '-')).getTime())
                .map(day => {
                  const transaction = item.all.day[day]

                  const days = acc.map((one: any) => one.day)
                  const index = days.indexOf(day)

                  if (index !== -1) {
                    acc[index].totalVolume += transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0
                    acc[index].transactionAmount += transaction?.transactionAmount ?? 0
                  } else {
                    acc.push({
                      day,
                      totalVolume: transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0,
                      transactionAmount: transaction?.transactionAmount ?? 0,
                    })
                  }
                })
            return acc
          }, []),
          1: TokenTradeInfo.reduce((acc, item) => {
            item.all &&
              Object.keys(item.all.week).map(week => {
                const transaction = item.all.week[week]

                const days = acc.map((one: any) => one.day)
                const index = days.indexOf(week)

                if (index !== -1) {
                  acc[index].totalVolume += transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0
                  acc[index].transactionAmount += transaction?.transactionAmount ?? 0
                } else {
                  acc.push({
                    day: week,
                    totalVolume: transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0,
                    transactionAmount: transaction?.transactionAmount ?? 0,
                  })
                }
              })
            return acc
          }, []),
          2: TokenTradeInfo.reduce((acc, item) => {
            item.all &&
              Object.keys(item.all.month).map(month => {
                const transaction = item.all.month[month]

                const days = acc.map((one: any) => one.day)
                const index = days.indexOf(month)

                if (index !== -1) {
                  acc[index].totalVolume += transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0
                  acc[index].transactionAmount += transaction?.transactionAmount ?? 0
                } else {
                  acc.push({
                    day: month,
                    totalVolume: transaction?.totalVolume ? formatUSei(transaction.totalVolume) : 0,
                    transactionAmount: transaction?.transactionAmount ?? 0,
                  })
                }
              })
            return acc
          }, []),
        },
    }
  }, [NftTradeInfo, isLoadingNftTradeInfo, TokenTradeInfo, isLoadingTokenTradeInfo]) as any

  const volumeChartData = useMemo(() => {
    return {
      nfts: !isLoadingNftTradeInfo &&
        NftTradeInfo && {
          buyVolume: {
            0: NftTradeInfo.reduce((acc, item) => {
              Object.keys(item.volume.buyVolume.day)
                .sort((a, b) => new Date(a.replaceAll('_', '-')).getTime() - new Date(b.replaceAll('_', '-')).getTime())
                .map(day => {
                  const volume = item.volume.buyVolume.day[day]
                  acc[day] = (acc[day] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
            1: NftTradeInfo.reduce((acc, item) => {
              Object.keys(item.volume.buyVolume.week)
                .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]))
                .map(week => {
                  const volume = item.volume.buyVolume.week[week]
                  acc[week] = (acc[week] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
            2: NftTradeInfo.reduce((acc, item) => {
              Object.keys(item.volume.buyVolume.month)
                .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]))
                .map(month => {
                  const volume = item.volume.buyVolume.month[month]
                  acc[month] = (acc[month] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
          },
          sellVolume: {
            0: NftTradeInfo.reduce((acc, item) => {
              Object.keys(item.volume.sellVolume.day)
                .sort((a, b) => new Date(a.replaceAll('_', '-')).getTime() - new Date(b.replaceAll('_', '-')).getTime())
                .map(day => {
                  const volume = item.volume.sellVolume.day[day]
                  acc[day] = (acc[day] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
            1: NftTradeInfo.reduce((acc, item) => {
              Object.keys(item.volume.sellVolume.week)
                .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]))
                .map(week => {
                  const volume = item.volume.sellVolume.week[week]
                  acc[week] = (acc[week] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
            2: NftTradeInfo.reduce((acc, item) => {
              Object.keys(item.volume.sellVolume.month)
                .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]))
                .map(month => {
                  const volume = item.volume.sellVolume.month[month]
                  acc[month] = (acc[month] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
          },
          flowOverview: [
            ...new Set([
              ...Object.keys(NftTradeInfo[0].volume.buyVolume.month),
              ...Object.keys(NftTradeInfo[0].volume.sellVolume.month),
            ]),
          ].reduce((acc: any, month) => {
            const sellVolume = NftTradeInfo[0].volume.sellVolume.month[month] || 0
            const buyVolume = NftTradeInfo[0].volume.buyVolume.month[month] || 0
            if (acc[month.split('_')[0]] === undefined) {
              acc[month.split('_')[0]] = {
                year: month.split('_')[0],
              }
            }
            const volume =
              (buyVolume?.totalVolume ? formatUSei(buyVolume.totalVolume) : 0) +
              (sellVolume?.totalVolume ? formatUSei(sellVolume.totalVolume) : 0)
            acc[month.split('_')[0]][month.split('_')[1]] = volume
            acc[month.split('_')[0]].total = (acc[month.split('_')[0]]?.total || 0) + volume
            return acc
          }, {}),
        },
      tokens: !isLoadingTokenTradeInfo &&
        TokenTradeInfo && {
          buyVolume: {
            0: TokenTradeInfo.reduce((acc, item) => {
              Object.keys(item.buy.day)
                .sort((a, b) => new Date(a.replaceAll('_', '-')).getTime() - new Date(b.replaceAll('_', '-')).getTime())
                .map(day => {
                  const volume = item.buy.day[day]
                  acc[day] = (acc[day] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
            1: TokenTradeInfo.reduce((acc, item) => {
              Object.keys(item.buy.week)
                .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]))
                .map(week => {
                  const volume = item.buy.week[week]
                  acc[week] = (acc[week] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
            2: TokenTradeInfo.reduce((acc, item) => {
              Object.keys(item.buy.month)
                .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]))
                .map(month => {
                  const volume = item.buy.month[month]
                  acc[month] = (acc[month] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
          },
          sellVolume: {
            0: TokenTradeInfo.reduce((acc, item) => {
              Object.keys(item.sell.day)
                .sort((a, b) => new Date(a.replaceAll('_', '-')).getTime() - new Date(b.replaceAll('_', '-')).getTime())
                .map(day => {
                  const volume = item.sell.day[day]
                  acc[day] = (acc[day] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
            1: TokenTradeInfo.reduce((acc, item) => {
              Object.keys(item.sell.week)
                .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]))
                .map(week => {
                  const volume = item.sell.week[week]
                  acc[week] = (acc[week] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
            2: TokenTradeInfo.reduce((acc, item) => {
              Object.keys(item.sell.month)
                .sort((a, b) => Number(a.split('_')[1]) - Number(b.split('_')[1]))
                .map(month => {
                  const volume = item.sell.month[month]
                  acc[month] = (acc[month] ?? 0) + volume?.totalVolume ? formatUSei(volume.totalVolume) : 0
                })

              return acc
            }, {}),
          },
          flowOverview: [
            ...new Set([...Object.keys(TokenTradeInfo[0].buy.month), ...Object.keys(TokenTradeInfo[0].sell.month)]),
          ].reduce((acc: any, month) => {
            const sellVolume = TokenTradeInfo[0].sell.month[month] || 0
            const buyVolume = TokenTradeInfo[0].buy.month[month] || 0
            if (acc[month.split('_')[0]] === undefined) {
              acc[month.split('_')[0]] = {
                year: month.split('_')[0],
              }
            }
            const volume =
              (buyVolume?.totalVolume ? formatUSei(buyVolume.totalVolume) : 0) +
              (sellVolume?.totalVolume ? formatUSei(sellVolume.totalVolume) : 0)
            acc[month.split('_')[0]][month.split('_')[1]] = volume
            acc[month.split('_')[0]].total = (acc[month.split('_')[0]]?.total || 0) + volume
            return acc
          }, {}),
        },
    }
  }, [NftTradeInfo, isLoadingNftTradeInfo, TokenTradeInfo, isLoadingTokenTradeInfo]) as any

  const realTimeNftTableData = useMemo(() => {
    return portfolioProfitTableData.map(item => ({
      ...item,
      wallet: (
        <div className="flex items-center justify-start gap-3">
          <Image alt="assets data" className="h-10 w-10" height={200} src={item.thumbnail} width={200} />
          <Typography>{item.title}</Typography>
        </div>
      ),

      amount: item.amount ? <Typography>{item.amount}</Typography> : '',

      asset: (
        <div className="flex items-center justify-start gap-3">
          <Image alt="assets data" className="h-10 w-10" height={200} src={item.thumbnail} width={200} />
          <Typography>{item.title}</Typography>
        </div>
      ),

      floor: item.floor ? <Typography>{item.floor}</Typography> : '',

      rarity: item.rarity ? <Typography>{item.rarity}</Typography> : '',

      buyPrice: item.buyPrice ? <Typography>{item.buyPrice}</Typography> : '',

      paidFees: item.paidFees ? <Typography>{item.paidFees}</Typography> : '',

      floorValue: item.floorValue ? <Typography>{item.floorValue}</Typography> : '',

      gains: item.gains ? <Typography>{item.gains}</Typography> : '',

      sinceTrade: (
        <div>
          <Typography>{item.sinceTrade.value}</Typography>
          {item.sinceTrade.gainOrLoss > 0 ? (
            <Typography className="text-md text-green">+{item.sinceTrade.gainOrLoss}%</Typography>
          ) : (
            <Typography className="text-md text-red">{item.sinceTrade.gainOrLoss}%</Typography>
          )}
        </div>
      ),

      buyer: (
        <div className="flex items-center justify-start gap-2 rounded-lg bg-blackCardBg p-2">
          <Image alt={item.buyer.name} className="h-6 w-6" height={100} src={item.buyer.thumbnail} width={100} />
          <Typography className="overflow-hidden text-ellipsis">{item.buyer.name}</Typography>
        </div>
      ),

      holdingTime: item.holdingTime ? <Typography>{item.holdingTime}d</Typography> : '',
    }))
  }, [portfolioProfitTableData])

  return (
    <div>
      {tabName === 1 && (
        <div>
          <div className="mt-4 !rounded-md bg-[#181620] p-4">
            <div className="flex flex-row flex-wrap items-center gap-2">
              <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                Asset Allocation
              </Typography>
              <div>
                <InfoIcons />
              </div>
            </div>

            <div className="mt-4 w-fit">
              <NavTabsMolecule
                activeTab={activeTabOfAssetAllocation}
                className="whitespace-nowrap"
                tabs={['Collection', 'Type', 'Category', 'Market Cap']}
                onTabChange={tab => {
                  setActiveTabOfAssetAllocation(tab)
                }}
              />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <DynamicDonutChart
                  centerContent={
                    <>
                      <p>Total</p>
                      <p className="text-xl text-white font-medium">
                        {(collectionChartData.nfts && `${collectionChartData.nfts['total'].toFixed(3)}`) || 0} SEI
                      </p>
                    </>
                  }
                  colors={['#5A3FFF', '#2592D9', '#1ED6FF', '#F466FE', '#C517D1', '#6B0090']}
                  height={550}
                  labels={collectionChartData.nfts ? Object.keys(collectionChartData.nfts['collections']) : []}
                  series={collectionChartData.nfts ? Object.values(collectionChartData.nfts['collections']) : []}
                  width={550}
                />
              </div>

              <div className="relative h-auto items-center justify-center pe-[12px] md:!flex">
                <table className="h-full w-full rounded-md font-Lexend">
                  <thead className="sticky top-0 bg-[#24222b]">
                    <tr>
                      <th className="w-2/5 text-left font-medium text-[#DBDBDB]">
                        <div className="flex items-center justify-center gap-2">
                          Collection <RxCaretSort className="text-paragraph" />
                        </div>
                      </th>
                      <th className="w-1/5 text-left font-medium text-[#DBDBDB]">
                        <div className="flex items-center justify-center gap-2">
                          Amount <RxCaretSort className="text-paragraph" />
                        </div>
                      </th>
                      <th className="w-1/5 text-left font-medium text-[#DBDBDB]">
                        <div className="flex items-center justify-center gap-2">
                          Weight <RxCaretSort className="text-paragraph" />
                        </div>
                      </th>
                      <th className="w-1/5 text-left font-medium text-[#DBDBDB]">
                        <div className="flex items-center justify-center gap-2">
                          Value <RxCaretSort className="text-paragraph" />
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="mt-5 overflow-y-scroll md:!h-[500px] [&>*>td:first-child]:border-s-0 [&>*>td:last-child]:border-e-0">
                    {!isLoadingHoldingNfts &&
                      holdingData.nfts &&
                      holdingData.nfts
                        .sort(
                          (a: any, b: any) =>
                            collectionChartData.nfts.collections[b.name] - collectionChartData.nfts.collections[a.name]
                        )
                        .slice(0, 10)
                        .map((collection: any) => (
                          <tr key={collection.contract}>
                            <td className="text-white w-2/5 text-left font-medium">
                              <div className="flex items-center justify-start gap-2">
                                <div className="h-5 w-5 rounded bg-red"></div>
                                {collection?.pfp && collection?.pfp !== null ? (
                                  <Image alt={'IMG'} height={48} src={collection?.pfp} width={48} />
                                ) : (
                                  <Image alt={'IMG'} height={48} src={IMG.webump} width={48} />
                                )}
                                <Typography>
                                  {collection?.name && collection?.name !== null ? collection?.name || '--' : '--'}
                                </Typography>
                              </div>
                            </td>

                            <td className="text-white w-1/5 text-left font-medium">
                              <div className="flex items-center justify-start gap-2">
                                {collection?.nftsHolding && collection?.nftsHolding !== null
                                  ? collection?.nftsHolding.length || '--'
                                  : '--'}
                              </div>
                            </td>

                            <td className="text-white w-1/5 text-left font-medium">
                              <div className="flex items-center justify-start gap-2">
                                {collectionChartData.nfts &&
                                collectionChartData.nfts.collections[collection.name] &&
                                collectionChartData.nfts['total'] &&
                                collectionChartData.nfts['total'] != 0
                                  ? (
                                      (collectionChartData.nfts.collections[collection.name] /
                                        collectionChartData.nfts['total']) *
                                      100
                                    ).toFixed(2) + '%'
                                  : '--'}
                              </div>
                            </td>

                            <td className="text-white w-1/5 text-left font-medium">
                              <div className="flex items-center justify-start gap-2">
                                {collection?.nftsHolding && collection.nftsHolding !== null
                                  ? `${Number(collectionChartData.nfts.collections[collection.name])?.toFixed(
                                      3
                                    )} SEI` || '--'
                                  : '--'}
                              </div>
                            </td>
                          </tr>
                        ))}
                  </tbody>

                  <tfoot className="[&>*>*]:py-2">
                    <tr>
                      <td>Total</td>
                      <td>
                        <div className="flex flex-col">
                          <p>Tokens: 4.000</p> <p>NFT: 4.000</p>
                        </div>
                      </td>
                      <td>NFT: 4.000</td>
                      <td>100%</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="overflow-scroll !rounded-md bg-[#181620] p-[22px]">
              <table className="rounded-corners h-full w-full min-w-[500px] overflow-hidden rounded-md font-Lexend">
                <thead className=" sticky top-0 bg-[#24222b]">
                  <tr>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '34%' }}>
                      <div className="md:!text-3xl text-xl flex !w-full items-center justify-center">Top Gainers</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                      <div className="flex !w-full items-center justify-center gap-2">Price</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                      <div className="flex !w-full items-center justify-center gap-2">Total Value</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                      <div className="flex !w-full items-center justify-center gap-2">Value Imapact</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="mt-5">
                  {!isLoadingNftsTopGainer &&
                    NftsTopGainer.topGainers.slice(0, 6).map((item: any, key: any) => {
                      return (
                        <tr key={item.key}>
                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              <div className="flex items-center gap-1">
                                <BookMarkEmpty /> {key + 1}
                              </div>
                              {item.image ? (
                                <Image alt="Image" height={48} src={item.image} width={48} />
                              ) : (
                                <Image alt="Image" height={48} src={IMG.webump} width={48} />
                              )}
                              {item?.name ? <Typography>{item.name}</Typography> : <Typography>WeBump</Typography>}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              {item?.price ? `${formatUSei(item.price)} SEI` : '--'}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              {item?.floor ? `${item.floor} SEI` : '--'}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">165.87.7SEI</div>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>

                <tfoot className="transparent-footer-bg">
                  <tr>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="overflow-scroll !rounded-md bg-[#181620] p-[22px]">
              <table className="rounded-corners h-full w-full min-w-[500px] overflow-scroll rounded-md font-Lexend">
                <thead className=" sticky top-0 bg-[#24222b]">
                  <tr>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '34%' }}>
                      <div className="md:!text-3xl text-xl flex !w-full items-center justify-center">Top Looser</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                      <div className="flex !w-full items-center justify-center">Price</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                      <div className="flex !w-full items-center justify-center">Total Value</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                      <div className="flex !w-full items-center justify-center">Value Impact</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="mt-5">
                  {!isLoadingNftsTopGainer &&
                    NftsTopGainer.topLosser.slice(0, 6).map((item: any, key: any) => {
                      return (
                        <tr key={item.key}>
                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              <div className="flex items-center gap-1">
                                <BookMarkEmpty />
                                {key + 1}
                              </div>
                              {item.image ? (
                                <Image alt="Image" height={48} src={item.image} width={48} />
                              ) : (
                                <Image alt="Image" height={48} src={IMG.webump} width={48} />
                              )}
                              {item?.name ? <Typography>{item.name}</Typography> : <Typography>WeBump</Typography>}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              {item?.price ? `${formatUSei(item.price)} SEI` : '--'}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              {item?.floor ? `${item.floor} SEI` : '--'}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">165.87.7SEI</div>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
                <tfoot className="transparent-footer-bg">
                  <tr>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="!rounded-md bg-blackCardBg p-4">
              <div className="flex flex-row flex-wrap justify-between gap-3">
                <div className="flex flex-col">
                  <div className="flex flex-row flex-wrap items-center gap-2">
                    <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                      Age of Assets
                    </Typography>
                    <div>
                      <InfoIcons />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <DonutWithTableChart
                  chartCenterContent={
                    <>
                      <p>Avg. Age</p>
                      <p className="text-2xl text-white font-medium">
                        {(timeChartData && `${(timeChartData['total'] / timeChartData['count']).toFixed(2)}`) || 0} Days
                      </p>
                    </>
                  }
                  chartData={[
                    NftTradeData?.ageOfNftAssets?.level1?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level2?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level3?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level4?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level5?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level6?.length || 0,
                  ]}
                  chartLabel={['< 1W ', '1W-4W', '1M-3M', '3M-6M', '6M-12M', '1Y+']}
                  columnHeadingFirst="Amount"
                  columnHeadingSecond="Assets"
                  isBg={false}
                  tableLeftList={[
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#5A3FFF]"></div>
                        </>
                      ),
                      title: '< 1 Week',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#2592D9]"></div>
                        </>
                      ),
                      title: '1-4 Weeks',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#1ED6FF]"></div>
                        </>
                      ),
                      title: '1 - 3 Month',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#F466FE]"></div>
                        </>
                      ),
                      title: '3 - 6 Month',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#C517D1]"></div>
                        </>
                      ),
                      title: '6 - 12 Month',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#6B0090]"></div>
                        </>
                      ),
                      title: '1 Year +',
                    },
                  ]}
                  totalHeading="Total Average"
                  totalValue={
                    (timeChartData && `${(timeChartData['total'] / timeChartData['count']).toFixed(2)} Days`) ||
                    '0 Days'
                  }
                />
              </div>
            </div>
            <div className="!rounded-md bg-blackCardBg p-4">
              <div className="flex flex-col justify-between gap-3">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Transaction
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <Typography className="text-left font-medium" size="lg">
                        5.463 SEI
                      </Typography>
                      <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                        +225,53%
                      </Typography>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>

                  <div className="h-fit !w-full xsm:!w-auto">
                    <NavTabsMolecule
                      activeTab={activeTabOfTransaction}
                      tabs={['D', 'W', 'M']}
                      onTabChange={tab => {
                        setActiveTabOfTransaction(tab)
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <CustomBarChart
                    data={transactionChartData.nfts[activeTabOfTransaction]}
                    height={300}
                    name="day"
                    width="100%"
                    xdata1="transactionAmount"
                    xdata2="totalVolume"
                    xdata3="amt"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 !rounded-md bg-[#181620] p-4">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Volume
            </Typography>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-row flex-wrap justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Buy Volume / Sell Volume
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mb-1 flex items-center justify-center">
                      <div className="mt-1 flex w-full flex-col items-start gap-1">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                          +225,53%
                        </Typography>
                      </div>
                      <div className="mt-2 flex w-full flex-col items-start gap-1">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-[#F32A5A]" size="sm">
                          -225,53%
                        </Typography>
                      </div>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>
                  <div className="h-fit !w-full xsm:!w-auto">
                    <NavTabsMolecule
                      activeTab={activeTabOfVolume}
                      tabs={['D', 'W', 'M']}
                      onTabChange={tab => {
                        setActiveTabOfVolume(tab)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <NegativeChart
                    height={200}
                    series={[
                      {
                        name: 'Buy Volume',
                        data: Object.values(volumeChartData.nfts['buyVolume'][activeTabOfVolume]) ?? [],
                      },
                      {
                        name: 'Sell Volume',
                        data: Object.values(volumeChartData.nfts['sellVolume'][activeTabOfVolume]) ?? [],
                      },
                    ]}
                    width={800}
                    xAxisCategory={[
                      ...Object.keys(volumeChartData.nfts['buyVolume'][activeTabOfVolume]),
                      ...Object.keys(volumeChartData.nfts['sellVolume'][activeTabOfVolume]),
                    ]}
                  />
                </div>
              </div>

              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col">
                      <div className="flex flex-row flex-wrap items-center gap-2">
                        <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                          Total Volume
                        </Typography>
                        <div>
                          <InfoIcons />
                        </div>
                      </div>
                      <div className="mt-2 flex w-full flex-row items-center gap-2">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                          +225,53%
                        </Typography>
                      </div>
                      <Typography className="text-left font-light text-black7f" size="small">
                        01.02.2022
                      </Typography>
                    </div>

                    <div className="h-fit !w-full xsm:!w-auto">
                      <NavTabsMolecule
                        activeTab={activeTabOfTotalVolume}
                        tabs={['D', 'W', 'M']}
                        onTabChange={tab => {
                          setActiveTabOfTotalVolume(tab)
                        }}
                      />
                    </div>
                  </div>

                  <div className="h-[200px]">
                    <CustomBarChart
                      data={transactionChartData.nfts[activeTabOfTotalVolume]}
                      height={200}
                      name="day"
                      width="100%"
                      xdata1="totalVolume"
                      xdata2="transactionAmount"
                      xdata3="amt"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 !rounded-md bg-[#1d1b25] p-6">
              <Typography className="mb-[22px] text-left text-[20px] font-medium">Volume Flow Overview</Typography>
              <Table
                className="[&>tbody>tr:last-child]:!border-b [&>tbody>tr:last-child]:!border-b-[#E8E1E180] [&>tbody>tr>td]:!border [&>tbody>tr>td]:!border-[#E8E1E180] [&>thead::after]:hidden [&>thead::before]:hidden [&>thead>tr>th:first-child]:w-auto [&>thead>tr>th]:border-b-0 [&>thead>tr>th]:border-b-[#E8E1E180] [&>thead>tr>th]:bg-transparent [&>thead]:border-b-0"
                columns={[
                  {
                    name: '',
                    selector: (val: any) => val.year,
                  },

                  {
                    name: 'Total',
                    selector: (val: any) => val.total.toFixed(2),
                  },

                  {
                    name: 'Avg.',
                    selector: (val: any) => (val.total / 12).toFixed(2),
                  },

                  {
                    name: 'Jan.',
                    selector: (val: any) => (val['1'] ? val['1'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['1'] ? (item['1'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Feb.',
                    selector: (val: any) => (val['2'] ? val['2'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['2'] ? (item['2'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Mar.',
                    selector: (val: any) => (val['3'] ? val['3'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['3'] ? (item['3'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Apr.',
                    selector: (val: any) => (val['4'] ? val['4'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['4'] ? (item['4'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'May',
                    selector: (val: any) => (val['5'] ? val['5'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['5'] ? (item['5'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Jun.',
                    selector: (val: any) => (val['6'] ? val['6'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['6'] ? (item['6'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Jul.',
                    selector: (val: any) => (val['7'] ? val['7'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['7'] ? (item['7'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Aug.',
                    selector: (val: any) => (val['8'] ? val['8'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['8'] ? (item['8'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Sep.',
                    selector: (val: any) => (val['9'] ? val['9'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['9'] ? (item['9'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Oct.',
                    selector: (val: any) => (val['10'] ? val['10'].toFixed(2) : ''),
                    itemClassName: (item: any) =>
                      item['10'] ? (item['10'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : '',
                  },
                  {
                    name: 'Nov.',
                    selector: (val: any) => (val['11'] ? val['11'].toFixed(2) : ''),
                    itemClassName: (item: any) =>
                      item['11'] ? (item['11'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : '',
                  },
                  {
                    name: 'Dec.',
                    selector: (val: any) => (val['12'] ? val['12'].toFixed(2) : ''),
                    itemClassName: (item: any) =>
                      item['12'] ? (item['12'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : '',
                  },
                ]}
                data={Object.values(volumeChartData.nfts['flowOverview'])}
                headingClassName="text-[#dbdbdb] font-normal"
                headingWrapperClassName="bg-transparent"
                itemClassName="p-[10px]"
                itemWrapperClassName="p-0 bg-[#292731] hover:bg-[#292731]"
              />
            </div>
          </div>

          <div className="mt-4 !rounded-md bg-[#181620] p-4">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Realized Gains
            </Typography>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-row flex-wrap justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Trades
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <Typography className="text-left font-medium" size="lg">
                        5.463 SEI
                      </Typography>
                      <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                        +225,53%
                      </Typography>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>
                  <div className="h-fit !w-full xsm:!w-auto">
                    <NavTabsMolecule
                      activeTab={activeTab}
                      tabs={['D', 'W', 'M']}
                      onTabChange={tab => {
                        setActiveTab(tab)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <NegativeChart
                    height={200}
                    series={[
                      {
                        name: 'Series A',
                        data: [44, 55, 41, 64, 22, 43, 21],
                      },
                      {
                        name: 'Series B',
                        data: [0, -23, -20, -8, -13, -27, -33],
                      },
                    ]}
                    width={800}
                    xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  />
                </div>
              </div>
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Staking
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <Typography className="text-left font-medium" size="lg">
                        5.463 SEI
                      </Typography>
                      <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                        +225,53%
                      </Typography>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>

                  <div className="h-[200px]">
                    <CustomBarChart
                      data={GraphData2}
                      height={200}
                      name="name"
                      width="100%"
                      xdata1="pv"
                      xdata2="uv"
                      xdata3="amt"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Lending
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <Typography className="text-left font-medium" size="lg">
                        5.463 SEI
                      </Typography>
                      <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                        +225,53%
                      </Typography>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>

                  <div className="h-[200px]">
                    <CustomBarChart
                      data={GraphData2}
                      height={200}
                      name="name"
                      width="100%"
                      xdata1="pv"
                      xdata2="uv"
                      xdata3="amt"
                    />
                  </div>
                </div>
              </div>
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-row flex-wrap justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Bought
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <div className="item-center flex flex-row gap-2">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                          +225,53%
                        </Typography>
                      </div>

                      <div className="item-center flex flex-row gap-2">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-red" size="sm">
                          -225,53%
                        </Typography>
                      </div>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>
                  <div className="h-fit !w-full xsm:!w-auto">
                    <NavTabsMolecule
                      activeTab={activeTab}
                      tabs={['D', 'W', 'M']}
                      onTabChange={tab => {
                        setActiveTab(tab)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <NegativeChart
                    height={200}
                    series={[
                      {
                        name: 'Series A',
                        data: [44, 55, 41, 64, 22, 43, 21],
                      },
                      {
                        name: 'Series B',
                        data: [0, -23, -20, -8, -13, -27, -33],
                      },
                    ]}
                    width={800}
                    xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 !rounded-md bg-[#1d1b25] p-6">
              <Typography className="mb-[22px] text-left text-[20px] font-medium">Volume Flow Overview</Typography>
              <Table
                className="[&>tbody>tr:last-child]:!border-b [&>tbody>tr:last-child]:!border-b-[#E8E1E180] [&>tbody>tr>td]:!border [&>tbody>tr>td]:!border-[#E8E1E180] [&>thead::after]:hidden [&>thead::before]:hidden [&>thead>tr>th:first-child]:w-auto [&>thead>tr>th]:border-b-0 [&>thead>tr>th]:border-b-[#E8E1E180] [&>thead>tr>th]:bg-transparent [&>thead]:border-b-0"
                columns={[
                  {
                    name: '',
                    selector: val => val.year,
                  },

                  {
                    name: 'Total',
                    selector: val => val.total,
                  },

                  {
                    name: 'Avg.',
                    selector: val => val.avg,
                  },

                  {
                    name: 'Jan.',
                    selector: val => (val.jan ? val.jan : ''),
                    itemClassName: item => (item.jan ? (item.jan > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Feb.',
                    selector: val => (val.feb ? val.feb : ''),
                    itemClassName: item => (item.feb ? (item.feb > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Mar.',
                    selector: val => (val.mar ? val.mar : ''),
                    itemClassName: item => (item.mar ? (item.mar > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Apr.',
                    selector: val => (val.apr ? val.apr : ''),
                    itemClassName: item => (item.apr ? (item.apr > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'May',
                    selector: val => (val.may ? val.may : ''),
                    itemClassName: item => (item.may ? (item.may > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Jun.',
                    selector: val => (val.jun ? val.jun : ''),
                    itemClassName: item => (item.jun ? (item.jun > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Jul.',
                    selector: val => (val.jul ? val.jul : ''),
                    itemClassName: item => (item.jul ? (item.jul > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Aug.',
                    selector: val => (val.aug ? val.aug : ''),
                    itemClassName: item => (item.aug ? (item.aug > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Sep.',
                    selector: val => (val.sep ? val.sep : ''),
                    itemClassName: item => (item.sep ? (item.sep > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Oct.',
                    selector: val => (val.oct ? val.oct : ''),
                    itemClassName: item => (item.oct ? (item.oct > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Nov.',
                    selector: val => (val.nov ? val.nov : ''),
                    itemClassName: item => (item.nov ? (item.nov > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Dec.',
                    selector: val => (val.dec ? val.dec : ''),
                    itemClassName: item => (item.dec ? (item.dec > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                ]}
                data={[
                  {
                    year: 2013,
                    total: 4500000,
                    avg: 1000,
                    jan: 1500000,
                    feb: 1500000,
                    mar: 1500000,
                    apr: -350000,
                    may: 1500000,
                    jun: 1500000,
                    jul: 1500000,
                    aug: -15000,
                    sep: 1500000,
                    oct: 1500000,
                    nov: 0,
                    dec: 0,
                  },

                  {
                    year: 2013,
                    total: 4500000,
                    avg: 1000,
                    jan: 1500000,
                    feb: -150000,
                    mar: 1500000,
                    apr: 1500000,
                    may: 1500000,
                    jun: -3200000,
                    jul: 1500000,
                    aug: 150000,
                    sep: 1500000,
                    oct: 1500000,
                    nov: -150000,
                    dec: 1500000,
                  },
                ]}
                headingClassName="text-[#dbdbdb] font-normal"
                headingWrapperClassName="bg-transparent"
                itemClassName="p-[10px]"
                itemWrapperClassName="p-0 bg-[#292731] hover:bg-[#292731]"
              />
            </div>
          </div>

          <div className="my-4 !rounded-md bg-[#181620] p-4">
            <div className="w-fit">
              <NavTabsMolecule
                activeTab={activeTab}
                className="whitespace-nowrap"
                tabs={['Biggest Profits', 'Biggest Loss']}
                onTabChange={val => {
                  setActiveTab(val)
                }}
              />
            </div>

            <div>
              <RealTimeNftTable data={realTimeNftTableData} headData={portfolioProfitTableKey} isShowCheckBox />
            </div>
          </div>
        </div>
      )}
      {tabName === 2 && (
        <div>
          <div className="mt-4 !rounded-md bg-[#181620] p-4">
            <div className="flex flex-row flex-wrap items-center gap-2">
              <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                Asset Allocation
              </Typography>
              <div>
                <InfoIcons />
              </div>
            </div>

            <div className="mt-4 w-fit">
              <NavTabsMolecule
                activeTab={activeTabOfAssetAllocation}
                className="whitespace-nowrap"
                tabs={['Collection', 'Type', 'Category', 'Market Cap']}
                onTabChange={tab => {
                  setActiveTabOfAssetAllocation(tab)
                }}
              />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <DynamicDonutChart
                  centerContent={
                    <>
                      <p>Total</p>
                      <p className="text-xl text-white font-medium">
                        {(collectionChartData.tokens && `${collectionChartData.tokens['total'].toFixed(3)}`) || 0} SEI
                      </p>
                    </>
                  }
                  colors={['#5A3FFF', '#2592D9', '#1ED6FF', '#F466FE', '#C517D1', '#6B0090']}
                  height={550}
                  labels={collectionChartData.tokens && Object.keys(collectionChartData.tokens['collections'])}
                  series={collectionChartData.tokens && Object.values(collectionChartData.tokens['collections'])}
                  width={550}
                />
              </div>

              <div className="relative h-auto items-center justify-center pe-[12px] md:!flex">
                <table className="h-full w-[1000px] rounded-md font-Lexend">
                  <thead className="sticky top-0 bg-[#24222b]">
                    <tr>
                      <th className="text-left font-medium text-[#DBDBDB]" style={{ width: '40%' }}>
                        <div className="flex items-center justify-center gap-2">
                          Collection <RxCaretSort className="text-paragraph" />
                        </div>
                      </th>
                      <th className="text-left font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                        <div className="flex items-center justify-center gap-2">
                          Amount <RxCaretSort className="text-paragraph" />
                        </div>
                      </th>
                      <th className="text-left font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                        <div className="flex items-center justify-center gap-2">
                          Weight <RxCaretSort className="text-paragraph" />
                        </div>
                      </th>
                      <th className="text-left font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                        <div className="flex items-center justify-center gap-2">
                          Value <RxCaretSort className="text-paragraph" />
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="mt-5 overflow-y-scroll md:!h-[500px] [&>*>td:first-child]:border-s-0 [&>*>td:last-child]:border-e-0">
                    {!isLoadingHoldingTokens &&
                      HoldingTokens &&
                      HoldingTokens.sort((a: any, b: any) => b.worthUsei - a.worthUsei)
                        .slice(0, 10)
                        .map((collection: any) => (
                          <tr key={collection.demon}>
                            <td className="text-white text-left font-medium">
                              <div className="flex items-center justify-start gap-2">
                                <div className="h-5 w-5 rounded bg-red"></div>
                                {collection?.logoUrl && collection?.logoUrl !== null ? (
                                  <Image alt={'IMG'} height={48} src={collection?.logoUrl} width={48} />
                                ) : (
                                  <Image alt={'IMG'} height={48} src={IMG.webump} width={48} />
                                )}
                                <Typography>
                                  {collection?.name && collection?.name !== null ? collection?.name || '--' : '--'}
                                </Typography>
                              </div>
                            </td>

                            <td className="text-white text-left font-medium">
                              <div className="flex items-center justify-start gap-2">
                                {collection?.amount && collection?.amount !== null
                                  ? formatUnits(collection?.amount, collection?.decimals).toFixed(3) || '--'
                                  : '--'}
                              </div>
                            </td>

                            <td className="text-white text-left font-medium">
                              <div className="flex items-center justify-start gap-2">
                                {collectionChartData.tokens &&
                                collectionChartData.tokens.collections[collection.name] &&
                                collectionChartData.tokens['total'] &&
                                collectionChartData.tokens['total'] != 0
                                  ? (
                                      (collectionChartData.tokens.collections[collection.name] /
                                        collectionChartData.tokens['total']) *
                                      100
                                    ).toFixed(2) + '%'
                                  : '--'}
                              </div>
                            </td>

                            <td className="text-white text-left font-medium">
                              <div className="flex items-center justify-start gap-2">
                                {collection?.worthUsei
                                  ? `${formatUnits(collection?.worthUsei, 6)?.toFixed(3)} SEI`
                                  : '--'}
                              </div>
                            </td>
                          </tr>
                        ))}
                  </tbody>

                  <tfoot className="[&>*>*]:py-5">
                    <tr>
                      <td>Total</td>
                      <td>
                        <div className="flex gap-2">
                          <p>Tokens: 4.000</p> <p>NFT: 4.000</p>
                        </div>
                      </td>
                      <td>NFT: 4.000</td>
                      <td>100%</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="overflow-scroll !rounded-md bg-[#181620] p-[22px]">
              <table className="rounded-corners h-full w-full min-w-[500px] overflow-hidden rounded-md font-Lexend">
                <thead className=" sticky top-0 bg-[#24222b]">
                  <tr>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '34%' }}>
                      <div className="md:!text-3xl text-xl flex !w-full items-center justify-center">Top Gainers</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                      <div className="flex !w-full items-center justify-center gap-2">Price</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                      <div className="flex !w-full items-center justify-center gap-2">Total Value</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                      <div className="flex !w-full items-center justify-center gap-2">Value Imapact</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="mt-5">
                  {!isLoadingTokensTopGainer &&
                    TokensTopGainer.topGainers.slice(0, 6).map((item: any, key: any) => {
                      return (
                        <tr key={item.demon}>
                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              <div className="flex items-center gap-1">
                                <BookMarkEmpty /> {key + 1}
                              </div>
                              {item.logoUrl ? (
                                <Image alt="Image" height={48} src={item.logoUrl} width={48} />
                              ) : (
                                <Image alt="Image" height={48} src={IMG.webump} width={48} />
                              )}
                              {item?.name ? <Typography>{item.name}</Typography> : <Typography>WeBump</Typography>}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              {item?.amount && item?.worthUsei
                                ? `${(
                                    formatUnits(item.worthUsei, 6) / formatUnits(item.amount, item?.decimals || 6)
                                  )?.toFixed(6)} SEI`
                                : '--'}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              {item?.worthUsei ? `${formatUnits(item.worthUsei, 6).toFixed(2)} SEI` : '--'}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">165.87.7SEI</div>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>

                <tfoot className="transparent-footer-bg">
                  <tr>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="overflow-scroll !rounded-md bg-[#181620] p-[22px]">
              <table className="rounded-corners h-full w-full min-w-[500px] overflow-scroll rounded-md font-Lexend">
                <thead className=" sticky top-0 bg-[#24222b]">
                  <tr>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '34%' }}>
                      <div className="md:!text-3xl text-xl flex !w-full items-center justify-center">Top Looser</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '20%' }}>
                      <div className="flex !w-full items-center justify-center">Price</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                      <div className="flex !w-full items-center justify-center">Total Value</div>
                    </th>
                    <th className="font-medium text-[#DBDBDB]" style={{ width: '24%' }}>
                      <div className="flex !w-full items-center justify-center">Value Impact</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="mt-5">
                  {!isLoadingNftsTopGainer &&
                    TokensTopGainer &&
                    TokensTopGainer.topLosser.slice(0, 6).map((item: any, key: any) => {
                      return (
                        <tr key={item.key}>
                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              <div className="flex items-center gap-1">
                                <BookMarkEmpty />
                                {key + 1}
                              </div>
                              {item.image ? (
                                <Image alt="Image" height={48} src={item.image} width={48} />
                              ) : (
                                <Image alt="Image" height={48} src={IMG.webump} width={48} />
                              )}
                              {item?.name ? <Typography>{item.name}</Typography> : <Typography>WeBump</Typography>}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              {item?.price ? `${formatUSei(item.price)} SEI` : '--'}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">
                              {item?.floor ? `${item.floor} SEI` : '--'}
                            </div>
                          </td>

                          <td className="text-white text-left font-medium">
                            <div className="flex items-center justify-center gap-2">165.87.7SEI</div>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
                <tfoot className="transparent-footer-bg">
                  <tr>
                    <td colSpan={4}></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="!rounded-md bg-blackCardBg p-4">
              <div className="flex flex-row flex-wrap justify-between gap-3">
                <div className="flex flex-col">
                  <div className="flex flex-row flex-wrap items-center gap-2">
                    <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                      Age of Assets
                    </Typography>
                    <div>
                      <InfoIcons />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <DonutWithTableChart
                  chartCenterContent={
                    <>
                      <p>Avg. Age</p>
                      <p className="text-2xl text-white font-medium">
                        {(timeChartData && `${(timeChartData['total'] / timeChartData['count']).toFixed(2)}`) || 0} Days
                      </p>
                    </>
                  }
                  chartData={[
                    NftTradeData?.ageOfNftAssets?.level1?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level2?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level3?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level4?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level5?.length || 0,
                    NftTradeData?.ageOfNftAssets?.level6?.length || 0,
                  ]}
                  chartLabel={['< 1W ', '1W-4W', '1M-3M', '3M-6M', '6M-12M', '1Y+']}
                  columnHeadingFirst="Amount"
                  columnHeadingSecond="Assets"
                  isBg={false}
                  tableLeftList={[
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#5A3FFF]"></div>
                        </>
                      ),
                      title: '< 1 Week',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#2592D9]"></div>
                        </>
                      ),
                      title: '1-4 Weeks',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#1ED6FF]"></div>
                        </>
                      ),
                      title: '1 - 3 Month',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#F466FE]"></div>
                        </>
                      ),
                      title: '3 - 6 Month',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#C517D1]"></div>
                        </>
                      ),
                      title: '6 - 12 Month',
                    },
                    {
                      icon: (
                        <>
                          <div className="h-3 w-3 rounded-full bg-[#6B0090]"></div>
                        </>
                      ),
                      title: '1 Year +',
                    },
                  ]}
                  totalHeading="Total Average"
                  totalValue={
                    (timeChartData && `${(timeChartData['total'] / timeChartData['count']).toFixed(2)} Days`) ||
                    '0 Days'
                  }
                />
              </div>
            </div>
            <div className="!rounded-md bg-blackCardBg p-4">
              <div className="flex flex-col justify-between gap-3">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Transaction
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <Typography className="text-left font-medium" size="lg">
                        5.463 SEI
                      </Typography>
                      <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                        +225,53%
                      </Typography>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>

                  <div className="h-fit !w-full xsm:!w-auto">
                    <NavTabsMolecule
                      activeTab={activeTabOfTransaction}
                      tabs={['D', 'W', 'M']}
                      onTabChange={tab => {
                        setActiveTabOfTransaction(tab)
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <CustomBarChart
                    data={transactionChartData.tokens[activeTabOfTransaction]}
                    height={300}
                    name="day"
                    width="100%"
                    xdata1="transactionAmount"
                    xdata2="totalVolume"
                    xdata3="amt"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 !rounded-md bg-[#181620] p-4">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Volume
            </Typography>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-row flex-wrap justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Buy Volume / Sell Volume
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mb-1 flex items-center justify-center">
                      <div className="mt-1 flex w-full flex-col items-start gap-1">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                          +225,53%
                        </Typography>
                      </div>
                      <div className="mt-2 flex w-full flex-col items-start gap-1">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-[#F32A5A]" size="sm">
                          -225,53%
                        </Typography>
                      </div>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>
                  <div className="h-fit !w-full xsm:!w-auto">
                    <NavTabsMolecule
                      activeTab={activeTabOfVolume}
                      tabs={['D', 'W', 'M']}
                      onTabChange={tab => {
                        setActiveTabOfVolume(tab)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <NegativeChart
                    height={200}
                    series={[
                      {
                        name: 'Buy Volume',
                        data: Object.values(volumeChartData.tokens['buyVolume'][activeTabOfVolume]) ?? [],
                      },
                      {
                        name: 'Sell Volume',
                        data: Object.values(volumeChartData.tokens['sellVolume'][activeTabOfVolume]) ?? [],
                      },
                    ]}
                    width={800}
                    xAxisCategory={[
                      ...Object.keys(volumeChartData.tokens['buyVolume'][activeTabOfVolume]),
                      ...Object.keys(volumeChartData.tokens['sellVolume'][activeTabOfVolume]),
                    ]}
                  />
                </div>
              </div>

              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col">
                      <div className="flex flex-row flex-wrap items-center gap-2">
                        <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                          Total Volume
                        </Typography>
                        <div>
                          <InfoIcons />
                        </div>
                      </div>
                      <div className="mt-2 flex w-full flex-row items-center gap-2">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                          +225,53%
                        </Typography>
                      </div>
                      <Typography className="text-left font-light text-black7f" size="small">
                        01.02.2022
                      </Typography>
                    </div>

                    <div className="h-fit !w-full xsm:!w-auto">
                      <NavTabsMolecule
                        activeTab={activeTabOfTotalVolume}
                        tabs={['D', 'W', 'M']}
                        onTabChange={tab => {
                          setActiveTabOfTotalVolume(tab)
                        }}
                      />
                    </div>
                  </div>

                  <div className="h-[200px]">
                    <CustomBarChart
                      data={transactionChartData.tokens[activeTabOfTotalVolume]}
                      height={200}
                      name="day"
                      width="100%"
                      xdata1="totalVolume"
                      xdata2="transactionAmount"
                      xdata3="amt"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 !rounded-md bg-[#1d1b25] p-6">
              <Typography className="mb-[22px] text-left text-[20px] font-medium">Volume Flow Overview</Typography>
              <Table
                className="[&>tbody>tr:last-child]:!border-b [&>tbody>tr:last-child]:!border-b-[#E8E1E180] [&>tbody>tr>td]:!border [&>tbody>tr>td]:!border-[#E8E1E180] [&>thead::after]:hidden [&>thead::before]:hidden [&>thead>tr>th:first-child]:w-auto [&>thead>tr>th]:border-b-0 [&>thead>tr>th]:border-b-[#E8E1E180] [&>thead>tr>th]:bg-transparent [&>thead]:border-b-0"
                columns={[
                  {
                    name: '',
                    selector: (val: any) => val.year,
                  },

                  {
                    name: 'Total',
                    selector: (val: any) => val.total.toFixed(2),
                  },

                  {
                    name: 'Avg.',
                    selector: (val: any) => (val.total / 12).toFixed(2),
                  },

                  {
                    name: 'Jan.',
                    selector: (val: any) => (val['1'] ? val['1'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['1'] ? (item['1'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Feb.',
                    selector: (val: any) => (val['2'] ? val['2'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['2'] ? (item['2'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Mar.',
                    selector: (val: any) => (val['3'] ? val['3'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['3'] ? (item['3'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Apr.',
                    selector: (val: any) => (val['4'] ? val['4'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['4'] ? (item['4'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'May',
                    selector: (val: any) => (val['5'] ? val['5'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['5'] ? (item['5'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Jun.',
                    selector: (val: any) => (val['6'] ? val['6'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['6'] ? (item['6'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Jul.',
                    selector: (val: any) => (val['7'] ? val['7'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['7'] ? (item['7'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Aug.',
                    selector: (val: any) => (val['8'] ? val['8'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['8'] ? (item['8'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Sep.',
                    selector: (val: any) => (val['9'] ? val['9'].toFixed(2) : ''),
                    itemClassName: (item: any) => (item['9'] ? (item['9'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Oct.',
                    selector: (val: any) => (val['10'] ? val['10'].toFixed(2) : ''),
                    itemClassName: (item: any) =>
                      item['10'] ? (item['10'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : '',
                  },
                  {
                    name: 'Nov.',
                    selector: (val: any) => (val['11'] ? val['11'].toFixed(2) : ''),
                    itemClassName: (item: any) =>
                      item['11'] ? (item['11'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : '',
                  },
                  {
                    name: 'Dec.',
                    selector: (val: any) => (val['12'] ? val['12'].toFixed(2) : ''),
                    itemClassName: (item: any) =>
                      item['12'] ? (item['12'] > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : '',
                  },
                ]}
                data={Object.values(volumeChartData.tokens['flowOverview'])}
                headingClassName="text-[#dbdbdb] font-normal"
                headingWrapperClassName="bg-transparent"
                itemClassName="p-[10px]"
                itemWrapperClassName="p-0 bg-[#292731] hover:bg-[#292731]"
              />
            </div>
          </div>

          <div className="mt-4 !rounded-md bg-[#181620] p-4">
            <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
              Realized Gains
            </Typography>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-row flex-wrap justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Trades
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <Typography className="text-left font-medium" size="lg">
                        5.463 SEI
                      </Typography>
                      <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                        +225,53%
                      </Typography>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>
                  <div className="h-fit !w-full xsm:!w-auto">
                    <NavTabsMolecule
                      activeTab={activeTab}
                      tabs={['D', 'W', 'M']}
                      onTabChange={tab => {
                        setActiveTab(tab)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <NegativeChart
                    height={200}
                    series={[
                      {
                        name: 'Series A',
                        data: [44, 55, 41, 64, 22, 43, 21],
                      },
                      {
                        name: 'Series B',
                        data: [0, -23, -20, -8, -13, -27, -33],
                      },
                    ]}
                    width={800}
                    xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  />
                </div>
              </div>
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Staking
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <Typography className="text-left font-medium" size="lg">
                        5.463 SEI
                      </Typography>
                      <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                        +225,53%
                      </Typography>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>

                  <div className="h-[200px]">
                    <CustomBarChart
                      data={GraphData2}
                      height={200}
                      name="name"
                      width="100%"
                      xdata1="pv"
                      xdata2="uv"
                      xdata3="amt"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-col justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Lending
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <Typography className="text-left font-medium" size="lg">
                        5.463 SEI
                      </Typography>
                      <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                        +225,53%
                      </Typography>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>

                  <div className="h-[200px]">
                    <CustomBarChart
                      data={GraphData2}
                      height={200}
                      name="name"
                      width="100%"
                      xdata1="pv"
                      xdata2="uv"
                      xdata3="amt"
                    />
                  </div>
                </div>
              </div>
              <div className="!rounded-md bg-[#1d1b25] p-4">
                <div className="flex flex-row flex-wrap justify-between gap-3">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap items-center gap-2">
                      <Typography className="text-left font-medium text-[#DBDBDB] drop-shadow" size="subtitle">
                        Bought
                      </Typography>
                      <div>
                        <InfoIcons />
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center gap-2">
                      <div className="item-center flex flex-row gap-2">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-[#00C68A]" size="sm">
                          +225,53%
                        </Typography>
                      </div>

                      <div className="item-center flex flex-row gap-2">
                        <Typography className="text-left font-medium" size="lg">
                          5.463 SEI
                        </Typography>
                        <Typography className="text-left font-Inter font-medium text-red" size="sm">
                          -225,53%
                        </Typography>
                      </div>
                    </div>
                    <Typography className="text-left font-light text-black7f" size="small">
                      01.02.2022
                    </Typography>
                  </div>
                  <div className="h-fit !w-full xsm:!w-auto">
                    <NavTabsMolecule
                      activeTab={activeTab}
                      tabs={['D', 'W', 'M']}
                      onTabChange={tab => {
                        setActiveTab(tab)
                      }}
                    />
                  </div>
                </div>

                <div>
                  <NegativeChart
                    height={200}
                    series={[
                      {
                        name: 'Series A',
                        data: [44, 55, 41, 64, 22, 43, 21],
                      },
                      {
                        name: 'Series B',
                        data: [0, -23, -20, -8, -13, -27, -33],
                      },
                    ]}
                    width={800}
                    xAxisCategory={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 !rounded-md bg-[#1d1b25] p-6">
              <Typography className="mb-[22px] text-left text-[20px] font-medium">Volume Flow Overview</Typography>
              <Table
                className="[&>tbody>tr:last-child]:!border-b [&>tbody>tr:last-child]:!border-b-[#E8E1E180] [&>tbody>tr>td]:!border [&>tbody>tr>td]:!border-[#E8E1E180] [&>thead::after]:hidden [&>thead::before]:hidden [&>thead>tr>th:first-child]:w-auto [&>thead>tr>th]:border-b-0 [&>thead>tr>th]:border-b-[#E8E1E180] [&>thead>tr>th]:bg-transparent [&>thead]:border-b-0"
                columns={[
                  {
                    name: '',
                    selector: val => val.year,
                  },

                  {
                    name: 'Total',
                    selector: val => val.total,
                  },

                  {
                    name: 'Avg.',
                    selector: val => val.avg,
                  },

                  {
                    name: 'Jan.',
                    selector: val => (val.jan ? val.jan : ''),
                    itemClassName: item => (item.jan ? (item.jan > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Feb.',
                    selector: val => (val.feb ? val.feb : ''),
                    itemClassName: item => (item.feb ? (item.feb > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Mar.',
                    selector: val => (val.mar ? val.mar : ''),
                    itemClassName: item => (item.mar ? (item.mar > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Apr.',
                    selector: val => (val.apr ? val.apr : ''),
                    itemClassName: item => (item.apr ? (item.apr > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'May',
                    selector: val => (val.may ? val.may : ''),
                    itemClassName: item => (item.may ? (item.may > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Jun.',
                    selector: val => (val.jun ? val.jun : ''),
                    itemClassName: item => (item.jun ? (item.jun > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Jul.',
                    selector: val => (val.jul ? val.jul : ''),
                    itemClassName: item => (item.jul ? (item.jul > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },

                  {
                    name: 'Aug.',
                    selector: val => (val.aug ? val.aug : ''),
                    itemClassName: item => (item.aug ? (item.aug > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Sep.',
                    selector: val => (val.sep ? val.sep : ''),
                    itemClassName: item => (item.sep ? (item.sep > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Oct.',
                    selector: val => (val.oct ? val.oct : ''),
                    itemClassName: item => (item.oct ? (item.oct > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Nov.',
                    selector: val => (val.nov ? val.nov : ''),
                    itemClassName: item => (item.nov ? (item.nov > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                  {
                    name: 'Dec.',
                    selector: val => (val.dec ? val.dec : ''),
                    itemClassName: item => (item.dec ? (item.dec > 0 ? 'bg-[#1D564C]' : 'bg-[#66283D]') : ''),
                  },
                ]}
                data={[
                  {
                    year: 2013,
                    total: 4500000,
                    avg: 1000,
                    jan: 1500000,
                    feb: 1500000,
                    mar: 1500000,
                    apr: -350000,
                    may: 1500000,
                    jun: 1500000,
                    jul: 1500000,
                    aug: -15000,
                    sep: 1500000,
                    oct: 1500000,
                    nov: 0,
                    dec: 0,
                  },

                  {
                    year: 2013,
                    total: 4500000,
                    avg: 1000,
                    jan: 1500000,
                    feb: -150000,
                    mar: 1500000,
                    apr: 1500000,
                    may: 1500000,
                    jun: -3200000,
                    jul: 1500000,
                    aug: 150000,
                    sep: 1500000,
                    oct: 1500000,
                    nov: -150000,
                    dec: 1500000,
                  },
                ]}
                headingClassName="text-[#dbdbdb] font-normal"
                headingWrapperClassName="bg-transparent"
                itemClassName="p-[10px]"
                itemWrapperClassName="p-0 bg-[#292731] hover:bg-[#292731]"
              />
            </div>
          </div>

          <div className="my-4 !rounded-md bg-[#181620] p-4">
            <div className="w-fit">
              <NavTabsMolecule
                activeTab={activeTab}
                className="whitespace-nowrap"
                tabs={['Biggest Profits', 'Biggest Loss']}
                onTabChange={val => {
                  setActiveTab(val)
                }}
              />
            </div>

            <div>
              <RealTimeNftTable data={realTimeNftTableData} headData={portfolioProfitTableKey} isShowCheckBox />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnalyticsBottomSection
