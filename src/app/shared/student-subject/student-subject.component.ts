import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-student-subject',

  templateUrl: './student-subject.component.html',
  styleUrl: './student-subject.component.scss'
})
export class StudentSubjectComponent {

  option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    xAxis: {
      type: 'category',
      data: ['ENG', 'KIS', 'MAT', 'BIO', 'CHEM', 'PHY']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [40, 70, 67, 80, 70, 69],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };



}
