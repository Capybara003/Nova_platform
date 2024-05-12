import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { DynamicLineGraphProps } from './interface'

const DynamicLineGraph: React.FC<DynamicLineGraphProps> = ({
  data,
  width,
  height,
  xAxisLabelKey,
  lineKeys = [],
  lineWidth = 2,
}) => {
  return (
    <ResponsiveContainer height={height} width={width}>
      <LineChart data={data}>
        <CartesianGrid stroke="#373737" strokeWidth={1} vertical={false} />
        <XAxis axisLine={false} dataKey={xAxisLabelKey} interval={'preserveStart'} />
        <YAxis axisLine={false} />
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

export default DynamicLineGraph
