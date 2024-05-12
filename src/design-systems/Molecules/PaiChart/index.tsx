/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { ResponsiveContainer, PieChart, Pie, Sector } from 'recharts'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]

interface ActiveShapeProps {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  startAngle: number
  endAngle: number
  fill: string
  payload: any
  percent: number
  value: number
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text dy={8} fill={fill} textAnchor="middle" x={cx} y={cy}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        endAngle={endAngle}
        fill={fill}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
      />
      <Sector
        cx={cx}
        cy={cy}
        endAngle={endAngle}
        fill={fill}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} fill="none" stroke={fill} />
      <circle cx={ex} cy={ey} fill={fill} r={2} stroke="none" />
      <text fill="#333" textAnchor={textAnchor} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey}>{`PV ${value}`}</text>
      <text dy={18} fill="#999" textAnchor={textAnchor} x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey}>
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

export const PaiChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const onPieEnter = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <ResponsiveContainer height="100%" width="100%">
      <PieChart height={400} width={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          cx="50%"
          cy="50%"
          data={data}
          dataKey="value"
          fill="#8884d8"
          innerRadius={60}
          outerRadius={80}
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
