import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-f1-termly',
  templateUrl: './f1-termly.component.html',
  styleUrl: './f1-termly.component.scss'
})
export class F1TermlyComponent {

  options1: EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', 'Form 1', 'Form 2', 'Form 3','Form 4'],
        ['Mean Mark', 43.3, 85.8, 93.7],
        ['Milk Tea', 83.1, 73.4, 55.1],
        ['Cheese Cocoa', 86.4, 65.2, 82.5],
        ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  };

  ngOnInit(): void {
    this. options1 = {
      legend: {},
      tooltip: {},
      title:{
        text:"Termly Pass Vs Fails Stats"
      },
      dataset: {
        source: [
          ['product', 'Pass', 'Fail'],
          ['Term1', 43.3, 85.8],
          ['Term2', 83.1, 73.],
          ['Term3', 86.4, 65.2],
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }]
    };
  }

}
