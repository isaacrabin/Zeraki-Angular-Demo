import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import Highcharts from 'highcharts';
import { CountUpModule } from 'ngx-countup';
import { SharedModule } from '../shared/shared.module';
import { NgxEchartsDirective, NgxEchartsModule, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers:[provideEcharts(),
  ],
  imports: [CountUpModule,NgxEchartsDirective,HighchartsChartModule, SharedModule],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit  {


  num: number = 40;
  count = 880;
  countClass = 25;
  countTeacher = 113;
  duration = 5000;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 20000,
    decimalPlaces: 0,
  };

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;


  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };


ageOption:EChartsOption = {
  tooltip: {
    trigger: 'item'
  },
  title:{
    text:"Form1 Pass Vs Fail",
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Age',
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
      color: [ "#005b82", "#bed600", "#47b2e4"],
      data: [56,90,57,48],
    },

  ]
};

  constructor(){
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Sample Chart'
      },
      series: [{
        data: [1, 2, 3, 4, 5]
      }]
    };
  }


  ngOnInit(): void {

  }

}
