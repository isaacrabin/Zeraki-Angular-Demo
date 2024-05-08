import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-enrolled-vs-total',
  templateUrl: './enrolled-vs-total.component.html',
  styleUrl: './enrolled-vs-total.component.scss'
})
export class EnrolledVsTotalComponent {
  passOption: EChartsOption = {}

  ngOnInit(): void {
    this.passOption = {
      tooltip: {
        trigger: 'item'
      },
      title:{
        text:"Total Vs Enrolled",
      },
      legend: {
        top: '2%',
      },
      series: [
        {
          name: 'Students',
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
          color: [  "#ff7d47","#bed600","#005b82"],
          data: [
            { value: 345, name: 'Total' },
            { value: 326, name: 'Enrolled' },
          ]
        }
      ]
    };
  }
}
