/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from 'react-apexcharts'

export const Radialbar = () => {
  const series = [76]
  const options: any = {
    chart: {
      height: 280,
      type: 'radialBar',
      width: '100%',
    },
    series: [67],
    colors: ['#0f643d'],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: ['#F32A5A'],
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '15.695px',
            color: '#DBDBDB',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        gradientToColors: ['#00C68A'],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'butt',
    },
    labels: ['Progress'],
    // chart: {
    //   type: 'radialBar',
    //   offsetY: -20,
    //   sparkline: {
    //     enabled: true,
    //   },
    // },
    // colors:["#00C68A"],
    // plotOptions: {
    //   radialBar: {
    //     startAngle: -90,
    //     endAngle: 90,
    //     track: {
    //       background: '#F32A5A',
    //       strokeWidth: '97%',
    //       margin: 5,
    //     },
    //     dataLabels: {
    //       name: {
    //         show: false,
    //       },
    //       value: {
    //         offsetY: -2,
    //         fontSize: '15.695px',
    //         color: '#DBDBDB',
    //       },
    //     },
    //   },
    // },
    // grid: {
    //   padding: {
    //     top: -10,
    //   },
    // },
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     shade: "dark",
    //     type: "horizontal",
    //     stops: [0, 50, 53, 91],

    //   },
    // },
    // stroke: {
    //     lineCap: "butt"
    //   },
    // labels: ['Average Results'],
  }

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radialBar" />
    </div>
  )
}
