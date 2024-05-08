import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-mixed-line-bar',
  templateUrl: './mixed-line-bar.component.html',
  styleUrl: './mixed-line-bar.component.scss'
})
export class MixedLineBarComponent implements OnInit {

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
      text:"Overral School Performance",
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
        text:"Overral School Performance",
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
            80,68,64,71
          ]
        },
        {
          name: 'Mean Point',
          type: 'bar',
          tooltip: {

          },
          data: [
            60, 78, 37, 26
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

  }
}
