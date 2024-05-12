import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts'

import { DonutChartProps } from './interface'

const DonutChart: React.FC<DonutChartProps> = ({ data, height, width }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'] // Add more colors if needed

  return (
    <ResponsiveContainer height={height} width={width}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          dataKey="value"
          fill="#8884d8"
          innerRadius={40}
          nameKey="name"
          outerRadius={80}
        >
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} key={`cell-${index}`} />
          ))}
          <Label fill="#000" fontSize={12} position="inside" value="name" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default DonutChart
