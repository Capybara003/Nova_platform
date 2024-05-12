/* eslint-disable react/jsx-sort-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const BarChartStackedBySign = ({
  name,
  width,
  xdata1,
  xdata2,
  xdata3,
  data,
  height,
}: BarChartStackedBySignProps) => {
  return (
    <ResponsiveContainer height={height} width={width} className={'!h-full !w-full'}>
      <BarChart
        data={data}
        height={height}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}

        // stackOffset="sign"
        // width={"100%"}
      >
        <CartesianGrid stroke="none" />
        <XAxis dataKey={name} />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine />
        <Bar dataKey={xdata1} fill="#00C68A" radius={[10, 10, 5, 5]} stackId="stack" />
        {/* <Bar dataKey={xdata2} fill="#F32A5A" radius={[10, 10, 5, 5]} stackId="stack"/> */}
      </BarChart>
    </ResponsiveContainer>
  )
}
