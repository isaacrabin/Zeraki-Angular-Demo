import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-performance-per-subject',
  templateUrl: './performance-per-subject.component.html',
  styleUrl: './performance-per-subject.component.scss'
})
export class PerformancePerSubjectComponent {
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
    title:{
      text:"Subjects Ranking"
    },
    color:['#ff7d47'],
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
