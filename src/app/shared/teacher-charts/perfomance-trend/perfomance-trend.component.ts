import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-perfomance-trend',
  templateUrl: './perfomance-trend.component.html',
  styleUrl: './perfomance-trend.component.scss'
})
export class PerfomanceTrendComponent {

  option02: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    title:{
      text:"Performance Trend",
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['Mean Mark', 'Mean Point', 'Enrolled Students']
    },
    xAxis: [
      {
        type: 'category',
        data: ['Form1', 'Form2', 'Form3', 'Form4'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Enrolled Students',
        min: 0,
        max: 400,
        interval: 40,
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: 'Marks',
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
      {
        name: 'Mean Mark',
        type: 'bar',
        tooltip: {

        },
        data: [
          0,0,0,0
        ]
      },
      {
        name: 'Mean Point',
        type: 'bar',
        tooltip: {

        },
        data: [
          0, 0, 0, 0
        ]
      },
      {
        name: 'Enrolled Students',
        type: 'line',

        tooltip: {

        },
        data: [100, 278, 300, 120]
      }
    ]
  };

  ngOnInit(): void {

    this.option02 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      title:{
        text:"Performance Trend",
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Best Performed', 'Worst Performed']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Term1', 'Term2', 'Term3'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [

        {
          type: 'value',
          name: 'Marks',
          min: 0,
          max: 100,
          interval: 10,
          axisLabel: {
            formatter: '{value}'
          }
        }
      ],
      series: [
        {
          name: 'Best Performed',
          type: 'bar',
          tooltip: {

          },
          data: [
            80,68,64,71
          ]
        },
        {
          name: 'Worst Performed',
          type: 'bar',
          tooltip: {

          },
          data: [
            60, 38, 37
          ]
        },
        // {
        //   name: 'Enrolled Students',
        //   type: 'line',

        //   tooltip: {

        //   },
        //   data: [100, 278, 300, 120]
        // }
      ]
    };

  }
}
