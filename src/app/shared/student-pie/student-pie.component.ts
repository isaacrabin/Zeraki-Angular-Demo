import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-student-pie',
  templateUrl: './student-pie.component.html',
  styleUrl: './student-pie.component.scss'
})
export class StudentPieComponent {
  passOption: EChartsOption = {}

  ngOnInit(): void {
    this.passOption = {
      title: {
        text: 'Best Vs Worst Performance',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Performance',
          type: 'pie',
          radius: '80%',
          data: [
            { value: 1048, name: 'Best' },
            { value: 735, name: 'Worst' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
