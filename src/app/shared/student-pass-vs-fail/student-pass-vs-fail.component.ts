import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-student-pass-vs-fail',
  templateUrl: './student-pass-vs-fail.component.html',
  styleUrl: './student-pass-vs-fail.component.scss'
})
export class StudentPassVsFailComponent {
  passOption: EChartsOption = {}

  ngOnInit(): void {
    this.passOption = {
      tooltip: {
        trigger: 'item'
      },
      title:{
        text:"Total Pass Vs Fail",
      },
      legend: {
        top: '2%',
      },
      series: [
        {
          name: 'Performance',
          type: 'pie',
          radius: ['40%', '80%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          color: [  "#28a745","#D22E2E","#005b82"],
          data: [
            { value: 4, name: 'Pass' },
            { value: 2, name: 'Fail' },
          ]
        }
      ]
    };
  }

}
