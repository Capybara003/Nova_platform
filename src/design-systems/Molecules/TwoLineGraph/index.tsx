import React from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'

import { TwoLineCustomLineChartProps } from './interface'

const TwoLineGraph: React.FC<TwoLineCustomLineChartProps> = ({
  data,
  xKey,
  width,
  height,
  hideXAxis = false,
  lineKeys = [],
  lineWidth = 2,
}) => {
  return (
    <ResponsiveContainer height={height} width={width}>
      <LineChart data={data}>
        <CartesianGrid stroke="#373737" strokeWidth={1} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={xKey}
          hide={hideXAxis}
          interval={'preserveStart'}
          style={{ fontSize: '16px', overflow: 'scroll' }}
        />
        <YAxis axisLine={false} hide={false} />
        <Tooltip
          contentStyle={{ backgroundColor: '#323232ad', border: '0', borderRadius: '10px' }}
          itemStyle={{ display: 'flex', justifyItems: 'start', alignItems: 'center', textTransform: 'capitalize' }}
          labelStyle={{ color: 'white', textAlign: 'left' }}
        />
        {lineKeys.map(item => {
          return (
            <Line
              dataKey={item.key}
              dot={false}
              key={item.key}
              stroke={item.strokeColor}
              strokeWidth={lineWidth}
              type="monotone"
            />
          )
        })}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default TwoLineGraph
