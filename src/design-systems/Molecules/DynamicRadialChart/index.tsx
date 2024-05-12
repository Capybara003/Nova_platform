import React from 'react'
import ReactApexChart from 'react-apexcharts'

import useWindowWidth from 'hooks/useWindowWidth'

interface DynamicRadialChartProps {
  height: string | number
  width: string | number
  series: number[]
  //   colors?: string[]
  centerContent: React.ReactNode
}

const DynamicRadialChart: React.FC<DynamicRadialChartProps> = ({ height, width, series, centerContent }) => {
  const windowWidth = useWindowWidth()
  return (
    <div className="relative flex w-fit items-center justify-center">
      <ReactApexChart
        height={windowWidth > 660 ? height : 250}
        options={{
          chart: {
            type: 'radialBar',
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: '70%',
                background: '#292731',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24,
                },
              },
              track: {
                background: '#292731',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35,
                },
              },

              dataLabels: {
                show: false,
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'vertical',
              shadeIntensity: 0.5,
              colorStops: [
                { color: '#C517D1', offset: 0, opacity: 1 },
                { color: '#2592D9', offset: 100, opacity: 1 },
              ],
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'square',
          },
        }}
        series={series}
        type="radialBar"
        width={windowWidth > 660 ? width : 250}
      />

      <div className="absolute left-1/2 top-1/2 flex h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full">
        {centerContent}
      </div>
    </div>
  )
}

export default DynamicRadialChart
