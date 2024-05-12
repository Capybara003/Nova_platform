import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

import { CustomLineChartProps } from './interface'

const Graph: React.FC<CustomLineChartProps> = ({
  data,
  xKey,
  yKey,
  width,
  height,
  hideXAxis = false,
  lineColor = '#8884d8',
  lineWidth = 2,
}) => {
  return (
    <ResponsiveContainer height={height} width={width}>
      <LineChart data={data}>
        {!hideXAxis && <XAxis dataKey={xKey} />}
        <YAxis hide={true} />
        <Tooltip
          contentStyle={{ backgroundColor: '#323232ad', border: '0', borderRadius: '10px' }}
          itemStyle={{ display: 'flex', justifyItems: 'start', alignItems: 'center', textTransform: 'capitalize' }}
          labelStyle={{ color: 'white', textAlign: 'left' }}
        />
        <Line dataKey={yKey} dot={false} stroke={lineColor} strokeWidth={lineWidth} type="monotone" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
