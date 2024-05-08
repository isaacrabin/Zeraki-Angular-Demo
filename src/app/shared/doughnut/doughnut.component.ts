import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrl: './doughnut.component.scss'
})
export class DoughnutComponent implements OnInit{
  passOption: EChartsOption = {}

  ngOnInit(): void {
    this.passOption = {
      tooltip: {
        trigger: 'item'
      },
      title:{
        text:"F1 Pass Vs Fail",
      },
      legend: {
        top: '2%',
      },
      series: [
        {
          name: 'Gender',
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
            { value: 345, name: 'Pass' },
            { value: 35, name: 'Fail' },
          ]
        }
      ]
    };
  }



}
