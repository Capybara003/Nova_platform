/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Treemap, ResponsiveContainer, Rectangle, Text, Cross } from 'recharts'

const data = [
  {
    name: 'data84',
    type: 'type 29',
    size: 86,
    percentage: 23,
  },
  {
    name: 'data78',
    type: 'type 79',
    size: 12,
    percentage: 23,
  },
  {
    name: 'data95',
    type: 'type 0',
    size: 150,
    percentage: 73,
  },
  {
    name: 'data73',
    type: 'type 16',
    size: 56,
    percentage: -23,
  },
  {
    name: 'data91',
    type: 'type 86',
    size: 99,
    percentage: -63,
  },
  {
    name: 'data82',
    type: 'type 0',
    size: 46,
    percentage: 23,
  },
  {
    name: 'data79',
    type: 'type 87',
    size: 45,
    percentage: 23,
  },
  {
    name: 'data68',
    type: 'type 52',
    size: 98,
    percentage: -23,
  },
  {
    name: 'data66',
    type: 'type 67',
    size: 57,
    percentage: 23,
  },
  {
    name: 'data50',
    type: 'type 9',
    size: 87,
    percentage: -23,
  },

  {
    name: 'data102',
    type: 'type 9',
    size: 67,
    percentage: -33,
  },

  {
    name: 'data109',
    type: 'type 9',
    size: 67,
    percentage: 3,
  },
]

const CustomizedContent = ({ depth, x, y, width, height, name, percentage }: any) => {
  if (depth !== 1) return null
  const fontSize = Math.min(width / 10, height / 2)
  return (
    <g>
      <Rectangle
        height={height}
        style={{
          fill: percentage >= 0 ? '#171F25' : '#231723',
        }}
        width={width}
        x={x}
        y={y}
      />
      <Rectangle
        height={height / 7}
        radius={[6, 6, 0, 0]}
        style={{
          fill: percentage >= 0 ? '#115144' : '#621D35',
        }}
        width={width}
        x={x}
        y={y}
      />
      <Rectangle
        fill={percentage >= 0 ? '#00C68A' : '#F32A5A'}
        height={2}
        stroke="transparent"
        width={width}
        x={x + 2}
        y={y + height / 7 - 1}
      />
      {height / 7 > 20 && (
        <Text
          fill="#fff"
          fontFamily="'Lexend', sans-serif"
          fontWeight={700}
          stroke="transparent"
          textAnchor="middle"
          verticalAnchor="middle"
          x={x + width / 2}
          y={y + height / 7 / 2}
        >
          Lorem Ipsum
        </Text>
      )}

      <Text
        fill="#fff"
        fontFamily="'Lexend', sans-serif"
        stroke="transparent"
        style={{
          textTransform: 'uppercase',
        }}
        textAnchor="middle"
        width={width}
        x={x + width / 2}
        y={y + height / 2 + 12}
        fontSize={fontSize + 5}
      >
        {name}
      </Text>

      <Text
        fill={percentage >= 0 ? '#00C68A' : '#621D35'}
        fontFamily="'Lexend', sans-serif"
        fontSize={12}
        stroke="transparent"
        textAnchor="middle"
        x={x + width / 2}
        y={y + height / 2 + 30}
      >
        {percentage >= 0 ? `+${percentage?.toFixed(2)}%` : `${percentage?.toFixed(2)}%`}
      </Text>
    </g>
  )
}

const TreeMap = () => {
  return (
    <div className="h-[700px] w-full">
      <ResponsiveContainer height="100%" width="100%">
        <Treemap
          content={<CustomizedContent />}
          data={data.sort((a, b) => b.size - a.size)}
          dataKey="size"
          stroke="#181620"
          style={{ strokeWidth: 4 }}
        ></Treemap>
      </ResponsiveContainer>
    </div>
  )
}

export default TreeMap
