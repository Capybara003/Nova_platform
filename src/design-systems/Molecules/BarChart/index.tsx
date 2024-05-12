import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { BarChartProps } from './interface'

const CustomBarChart: React.FC<BarChartProps> = ({ data, height, name, width, xdata1, xdata2, xdata3 }) => {
  return (
    <ResponsiveContainer height={height} width={width}>
      <BarChart data={data} barCategoryGap={2} barGap={5}>
        <CartesianGrid horizontal={true} stroke="#373737" vertical={false} />
        <XAxis dataKey={name} />
        <YAxis />
        <Tooltip
          contentStyle={{ backgroundColor: '#323232ad', border: '0', borderRadius: '10px' }}
          itemStyle={{ display: 'flex', justifyItems: 'start', alignItems: 'center', textTransform: 'capitalize' }}
          labelStyle={{ color: 'white', textAlign: 'left' }}
        />
        <Bar dataKey={xdata1} fill="#00C68A" radius={[10, 10, 0, 0]} />
        <Bar dataKey={xdata2} fill="#00C68A" radius={[10, 10, 0, 0]} />
        <Bar dataKey={xdata3} fill="#00C68A" radius={[10, 10, 0, 0]} />
        <Bar dataKey={xdata2} fill="#00C68A" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default CustomBarChart
