/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useMemo } from 'react'
import Chart from 'react-apexcharts'

import useWindowWidth from 'hooks/useWindowWidth'

type DynamicDonutChartType = 'type1' | 'type2'
interface DynamicDonutChartProps {
  width: number
  height: number
  series: number[]
  labels: string[]
  colors: string[]
  centerContent: React.ReactNode
  legend?: boolean
  type?: DynamicDonutChartType
}

const getOption = (colors: string[], labels: string[], legend: boolean, type: DynamicDonutChartType) => {
  const type2 = {
    colors: colors,
    labels: labels,
    fill: {
      type: 'gradient',
      colors: colors,
      gradient: {
        shade: 'dark',
        type: 'vertical',
      },
    },

    legend: {
      show: false,
      labels: {
        colors: '#fff',
      },
      markers: {
        customHTML: function () {
          return `<div></div>`
        },
      },
    },

    stroke: {
      colors: colors,
    },

    tooltip: {
      custom: function ({ seriesIndex, w }: any) {
        return `<div class="tooltip-donut">${labels[seriesIndex]}: ${w.config.series[seriesIndex]}</div>`
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80',
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    chart: {
      dropShadow: {
        enabled: true,
        blur: 5,
        left: 2,
        top: 2,
        opacity: 0.8,
      },
    },
  }

  const type1 = {
    colors: colors,
    labels: labels,
    fill: {
      type: 'gradient',
      colors: colors,
      gradient: {
        shade: 'dark',
        type: 'vertical',
      },
    },

    legend: {
      show: legend,
      labels: {
        colors: '#fff',
      },
      markers: {
        customHTML: function () {
          return `<div></div>`
        },
      },
    },

    stroke: {
      colors: ['#ffffff26'],
    },

    tooltip: {
      custom: function ({ seriesIndex, w }: any) {
        return `<div class="tooltip-donut">${labels[seriesIndex]}: ${w.config.series[seriesIndex]}</div>`
      },
    },

    plotOptions: {
      pie: {
        donut: {
          size: '60',
        },
      },
    },
  }

  const obj = {
    type1,
    type2,
  }

  return obj[type]
}

/**
 * Create a customizable chart with the specified width, height, data series, labels, colors, center content, and legend visibility.
 *
 * @param {number} width - Width of the chart.
 * @param {number} height - Height of the chart.
 * @param {Array} series - List of data series.
 * @param {Array} labels - List of labels for each data slot.
 * @param {Array} colors - List of colors for each data slot.
 * @param {string} centerContent - HTML content for the center of the chart.
 *                               Enclose the content in a <div> tag.
 *                               Example: `<div>Center Content</div>`.
 * @param {boolean} legend - Flag to show or hide the default chart legend.
 *
 * @returns {void}
 *
 * @example
 * // Example Usage:
 * <DynamicDonutChart
 *   centerContent={
 *     <>
 *       <p>Listed</p>
 *       <p className="text-2xl text-white font-medium">5%/325</p>
 *       <p> of 6500</p>
 *     </>
 *   }
 *   colors={['#5A3FFF', '#2592D9', '#1ED6FF', '#F466FE', '#C517D1', '#6B0090']}
 *   height={300}
 *   labels={['0-5K ', '5K-25k', '25K-100K', '100K-250K', '250K-1M', '1M+']}
 *   series={[22, 20, 20, 22, 32, 51]}
 *   width={300}
 * />
 */
const DynamicDonutChart: React.FC<DynamicDonutChartProps> = ({
  width = 100,
  height = 100,
  series,
  labels,
  colors,
  centerContent,
  legend = false,
  type = 'type1',
}) => {
  const option = useMemo(() => getOption(colors, labels, legend, type), [colors, labels, legend, type])
  const windowWidth = useWindowWidth()

  return (
    <div className="relative w-fit">
      <Chart
        height={windowWidth > 660 ? height : 250}
        options={option}
        series={series}
        type="donut"
        width={windowWidth > 660 ? width : 250}
      />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-[rgba(255,_255,_255,_0.6)]">
        {centerContent}
      </div>
    </div>
  )
}

export default DynamicDonutChart
