import { Component, Input } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-subject-history',
  templateUrl: './subject-history.component.html',
  styleUrl: './subject-history.component.scss'
})
export class SubjectHistoryComponent {

  @Input() performance: string = "f1";

  options1: EChartsOption = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['product', 'Term1', 'Term2', 'Term3'],
        ['Form1', 43.3, 85.8, 93.7],
        ['Form2', 83.1, 73.4, 55.1],
        ['Form3', 86.4, 65.2, 82.5],
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
    dataset: {
      source: [
        ['product', 'Term1', 'Term2', 'Term3'],
        ['Form1', 43.3, 85.8, 93.7],
        ['Form2', 83.1, 73.4, 55.1],
        ['Form3', 86.4, 65.2, 82.5],
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
  }
}
