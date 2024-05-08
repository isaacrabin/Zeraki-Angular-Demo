import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-mixed-bar-line-student',
  templateUrl: './mixed-bar-line-student.component.html',
  styleUrl: './mixed-bar-line-student.component.scss'
})
export class MixedBarLineStudentComponent {

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
      data: ['Mean Mark', 'Mean Point', 'Position In Class']
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
        name:  'Position In Class',
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
        name:  'Position In Class',
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
      data: ['Mean Mark', 'Mean Point', 'Position In Class']
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
        name:  'Position In Class',
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
          45,56,70,61
        ]
      },
      {
        name: 'Mean Point',
        type: 'bar',
        tooltip: {

        },
        data: [
          75,67,70,83
        ]
      },
      {
        name:  'Position In Class',
        type: 'line',

        tooltip: {

        },
        data: [10, 78, 100, 120]
      }
    ]
  }; }
}
