type lineKey = { key: string; strokeColor: string }

export interface DynamicLineGraphProps {
  data: { [key: string]: unknown }[]
  xAxisLabelKey: string
  lineKeys: lineKey[]
  width: string
  height: number | string
  lineWidth?: number
}
