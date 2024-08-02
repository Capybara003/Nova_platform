/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Chart from 'react-apexcharts'

interface NegativeChartProps {
  width?: number
  height: number
  series: { name: string; data: number[] }[]
  xAxisCategory: string[]
}

const NegativeChart: React.FC<NegativeChartProps> = ({ height, width, series, xAxisCategory }) => {
  return (
    <div className="relative w-full text-[#ffffff]">
      <Chart
        height={height}
        options={{
          chart: {
            stacked: true,
            toolbar: {
              show: true,
            },
            type: 'bar',
          },
          colors: ['#00C68A', '#F32A5A'],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 6,
              borderRadiusWhenStacked: 'all',
              borderRadiusApplication: 'around',
              // columnWidth: '30',
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          tooltip: {
            shared: false,
            x: {
              formatter: function (val) {
                return val.toString()
              },
            },
            y: {
              formatter: function (val) {
                return val.toString()
              },
            },
            theme: 'dark',
            style: {
              fontSize: '18px',
              fontFamily: 'Lexend',
            },
            items: {
              display: 'flex',
            },
            fixed: {
              enabled: false,
              position: 'topRight',
              offsetX: 0,
              offsetY: 0,
            },
          },

          xaxis: {
            categories: xAxisCategory,
            labels: {},
          },
        }}
        series={series}
        type="bar"
        width={'100%'}
      />
    </div>
  )
}

export default NegativeChart
