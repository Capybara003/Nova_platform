import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import { LineChartProps } from './interface'

const Graph: React.FC<LineChartProps> = ({
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
        <Line dataKey={yKey} dot={false} stroke={lineColor} strokeWidth={lineWidth} type="monotone" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
