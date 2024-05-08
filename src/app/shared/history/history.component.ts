import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit{

  option: EChartsOption = {
    legend: {},
    tooltip: {},
    title: {
      text: 'History',

    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015'],
        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
        ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
      ]
    },
    xAxis: [
      { type: 'category', gridIndex: 0 },
      { type: 'category', gridIndex: 1 }
    ],
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
      // These series are in the first grid.
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      // These series are in the second grid.
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
    ]
  };

  ngOnInit(): void {

    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      title:{
        text:" Enrolment Stats"
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['2022', '2023', '2024']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        // {
        //   name: 'Direct',
        //   type: 'bar',
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [320, 332, 301, 334, 390, 330, 320]
        // },
        {
          name: 'Term1',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101]
        },
        {
          name: 'Term2',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191]
        },
        {
          name: 'Term3',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201]
        },
        // {
        //   name: 'Search Engine',
        //   type: 'bar',
        //   data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   markLine: {
        //     lineStyle: {
        //       type: 'dashed'
        //     },
        //     data: [[{ type: 'min' }, { type: 'max' }]]
        //   }
        // },
        // {
        //   name: 'Baidu',
        //   type: 'bar',
        //   barWidth: 5,
        //   stack: 'Search Engine',
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [620, 732, 701, 734, 1090, 1130, 1120]
        // },
        // {
        //   name: 'Google',
        //   type: 'bar',
        //   stack: 'Search Engine',
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [120, 132, 101, 134, 290, 230, 220]
        // },
        // {
        //   name: 'Bing',
        //   type: 'bar',
        //   stack: 'Search Engine',
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [60, 72, 71, 74, 190, 130, 110]
        // },
        // {
        //   name: 'Others',
        //   type: 'bar',
        //   stack: 'Search Engine',
        //   emphasis: {
        //     focus: 'series'
        //   },
        //   data: [62, 82, 91, 84, 109, 110, 120]
        // }
      ]
    };



  }

}
