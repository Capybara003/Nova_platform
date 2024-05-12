/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dist/shared/lib/dynamic'

import { NagativeBarChartsProps } from './interface'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
export const NagitiveBarChart = ({ horizontal, barHeight, height, borderRadius, type }: NagativeBarChartsProps) => {
  const series = [
    {
      name: 'Males',
      data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1],
    },
    {
      name: 'Females',
      data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2],
    },
  ]

  const options: any = {
    chart: {
      type: `${type}`,
      height: `${height}`,
      stacked: true,
      style: {
        color: ['#DBDBDB'], // This sets the text color of the entire chart
      },
      toolbar: {
        show: false, // Set show to false to hide the download dropdown menu
      },
    },
    colors: ['#00C68A', '#F32A5A'],
    plotOptions: {
      bar: {
        horizontal: `${horizontal}`,
        barHeight: `${barHeight}`,
        borderRadius: `${borderRadius}`,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
      colors: ['#fff'],
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#DBDBDB'],
        },
      },
    },
    tooltip: {
      shared: false,
      theme: 'dark',
      x: {
        formatter: (val: any) => val,
      },
      y: {
        formatter: (val: any) => Math.abs(val) + '%',
      },
    },
    xaxis: {
      categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64'],
      title: {
        text: 'Percent',
        style: {
          color: '#DBDBDB', // Set the desired color for the title text
        },
      },
      labels: {
        formatter: (val: any) => Math.abs(Math.round(val)) + '%',
        style: {
          colors: ['#DBDBDB'],
        },
      },
    },
  }
  return <ReactApexChart height={height} options={options} series={series} type="bar" />
}
