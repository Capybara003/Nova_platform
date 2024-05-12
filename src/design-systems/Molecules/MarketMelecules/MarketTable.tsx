/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import { RxCaretSort } from 'react-icons/rx'

import TableProps from '../IndexTable/interface'
import { TableSkeletan } from '../Skeletan/TableSkeletan'

import { BookMarkEmpty } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { Currency, HistoricalData } from 'design-systems/Templates/MarketAnaliticsTemplate/interface'
import { NoData } from 'design-systems/Atoms/NoData'

const MarketTable: React.FC<TableProps> = ({ data, headData, loading }) => {
  const router = useRouter()
  const [currencies, setCurrencies] = useState<Currency[]>([])
  const [pair, setPair] = useState<string | never>('')
  const [price, setPrice] = useState<string>('0.00')
  const [pastData, setPastData] = useState<HistoricalData>({})
  const ws = useRef<WebSocket | null | any>(null)

  const first = useRef<boolean>(false)
  const url = 'https://api.pro.coinbase.com'
  useEffect(() => {
    ws.current = new WebSocket('wss://ws-feed.pro.coinbase.com')

    let pairs: Currency[] = []

    const apiCall = async () => {
      await fetch(url + '/products')
        .then(res => res.json())
        .then((data: Currency[]) => (pairs = data))

      let filtered = pairs.filter(pair => pair.quote_currency === 'USD')

      filtered = filtered.sort((a, b) => a.base_currency.localeCompare(b.base_currency))

      setCurrencies(filtered)

      first.current = true
    }
    apiCall()
  }, [])
  const formatData = (data: any) => {
    const finalData = {
      labels: [],
      datasets: [
        {
          label: 'Price',
          data: [],
          backgroundColor: 'rgb(255, 99, 132, 0.8)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
        },
      ],
    }

    const dates = data.map((val: any) => {
      const ts = val[0]
      const date = new Date(ts * 1000)
      const day = date.getDate()
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      const final = `${month}-${day}-${year}`
      return final
    })

    const priceArr = data.map((val: any) => {
      return val[4]
    })

    priceArr.reverse()
    dates.reverse()
    finalData.labels = dates
    finalData.datasets[0].data = priceArr

    return finalData
  }

  useEffect(() => {
    if (!first.current) {
      return
    }

    const msg = {
      type: 'subscribe',
      product_ids: [pair],
      channels: ['ticker'],
    }
    const jsonMsg = JSON.stringify(msg)
    ws.current.send(jsonMsg)

    const historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`
    const fetchHistoricalData = async () => {
      let dataArr: any = []
      await fetch(historicalDataURL)
        .then(res => res.json())
        .then(data => (dataArr = data))
      const formattedData = formatData(dataArr)
      setPastData(formattedData)
    }

    fetchHistoricalData()

    ws.current.onmessage = (e: any) => {
      const data = JSON.parse(e.data)
      if (data.type !== 'ticker') {
        return
      }

      if (data.product_id === pair) {
        setPrice(data.price)
        router.push('/single-collection', data)
      }
    }
  }, [pair])

  const handleSelect = (item: any) => {
    const unsubMsg = {
      type: 'unsubscribe',
      product_ids: [pair],
      channels: ['ticker'],
    }
    const unsub = JSON.stringify(unsubMsg)

    ws.current?.send(unsub)

    setPair(item.id)
  }

  return (
    <table className="rounded-corners w-full rounded-sm  font-Lexend">
      <thead>
        <tr>
          <th>
            <BookMarkEmpty />
          </th>
          {headData?.map((item: any, key: any) => (
            <th key={key}>
              <div className="flex items-center justify-center gap-2">
                {item.isInfo && <FiInfo className="text-md" />}

                <Typography className={`line-clamp-2 overflow-hidden text-ellipsis`} size="md">
                  {item.name}
                </Typography>

                {item.isSort && <RxCaretSort className="text-md" />}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {loading &&
          data?.map((item: any, key: number) => (
            <tr className="cursor-pointer" key={key} onClick={() => router.push('/single-collection')}>
              <td>
                {' '}
                <div className="flex gap-2">
                  <BookMarkEmpty />
                  <Typography>{key + 1}</Typography>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <Image
                    alt="IMG"
                    className="rounded-ee-[10px] rounded-ss-[10px]"
                    height={48}
                    src={item?.thumbnail}
                    width={48}
                  />
                  <Typography className="font-normal" size="body">
                    {item?.highestSale?.assetName}
                  </Typography>
                </div>
              </td>
              <td>{item?.floorPrice}</td>
              <td>{item?.totalVolume}</td>
              <td>{item?.highestSale?.price}</td>
              <td>{item?.marketcap}</td>
            </tr>
          ))}
        {data && data?.length === 0 && (
          <tr>
            <td colSpan={headData.length + 1}>
              <NoData />
            </td>
          </tr>
        )}
        {!loading &&
          Array(8)
            .fill('')
            .map((_, key) => (
              <tr key={key}>
                <td colSpan={headData.length + 1}>
                  <TableSkeletan limit={1} />
                </td>
              </tr>
            ))}
      </tbody>
      {/* <tbody>
        {data?.map((item: any, key: number) => (
          <tr key={key}>
            <td>
              <BookMarkEmpty />
            </td>
            <td>{item.display_name}</td>
          </tr>
        ))}
        {currencies.map((item: any, key: number) => {
          return (
            <tr className="cursor-pointer !border-b-2 !border-black225_05" key={key} onClick={() => handleSelect(item)}>
              <td>
                <BookMarkEmpty />
              </td>
              <td>{item.display_name}</td>
            </tr>
          )
        })}
      </tbody> */}
    </table>
  )
}
export default MarketTable
