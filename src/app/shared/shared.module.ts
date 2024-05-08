import { MixedBarLineStudentComponent } from './mixed-bar-line-student/mixed-bar-line-student.component';

import { HistoryComponent } from './history/history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { HighchartsChartModule } from 'highcharts-angular';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { MixedLineBarComponent } from './mixed-line-bar/mixed-line-bar.component';
import { StackedBarComponent } from './stacked-bar/stacked-bar.component';
import { F1TermlyComponent } from './f1-termly/f1-termly.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SubjectPerformanceComponent } from './subject-performance/subject-performance.component';
import { SidenavComponent } from '../layout/sidenav/sidenav.component';
import { CountUpModule } from 'ngx-countup';
import { StudentSubjectComponent } from './student-subject/student-subject.component';
import { StudentPieComponent } from './student-pie/student-pie.component';
import { StudentPassVsFailComponent } from './student-pass-vs-fail/student-pass-vs-fail.component';
import { SubjectHistoryComponent } from './subject-history/subject-history.component';
import { PerfomanceTrendComponent } from './teacher-charts/perfomance-trend/perfomance-trend.component';
import { StudentListComponent } from './teacher-charts/student-list/student-list.component';
import { EnrolledVsTotalComponent } from './enrolled-vs-total/enrolled-vs-total.component';
import { PerformancePerSubjectComponent } from './teacher-charts/performance-per-subject/performance-per-subject.component';



@NgModule({
  declarations: [
    DoughnutComponent,
    MixedLineBarComponent,
    StackedBarComponent,
    HistoryComponent,
    F1TermlyComponent,
    SubjectPerformanceComponent,
    MixedBarLineStudentComponent,
    StudentSubjectComponent,
    StudentPieComponent,
    StudentPassVsFailComponent,
    SubjectHistoryComponent,
    PerfomanceTrendComponent,
    StudentListComponent,
    EnrolledVsTotalComponent,
    PerformancePerSubjectComponent

  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({ echarts }),
    HighchartsChartModule,
    NgxDatatableModule,
    SidenavComponent,
    CountUpModule,
    ToastrModule.forRoot(),

  ],
  exports:[
    MixedLineBarComponent,
    DoughnutComponent,
    StackedBarComponent,
    HistoryComponent,
    F1TermlyComponent,
    NgxDatatableModule,
    SubjectPerformanceComponent,
    SidenavComponent,
    CountUpModule,
    MixedBarLineStudentComponent,
    StudentSubjectComponent,
    StudentPieComponent,
    StudentPassVsFailComponent,
    SubjectHistoryComponent,
    PerfomanceTrendComponent,
    StudentListComponent,
    EnrolledVsTotalComponent,
    PerformancePerSubjectComponent
  ],
  providers:[ToastrService]
})
export class SharedModule { }
