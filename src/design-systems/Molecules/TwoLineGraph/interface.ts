type lineKey = { key: string; strokeColor: string }
export interface TwoLineCustomLineChartProps {
  data: { [key: string]: unknown }[]
  xKey: string
  yKey: string
  width: string
  height: number | string
  hideXAxis?: boolean
  lineColor?: string
  lineColor2?: string
  lineWidth?: number
  lineKeys?: lineKey[]
}
