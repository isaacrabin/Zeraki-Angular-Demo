import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsPerformanceComponent } from './students-performance/students-performance.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AssessmentsComponent } from './assessments/assessments.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentsPerformanceComponent,
    ViewStudentComponent,
    AssessmentsComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
  ]
})
export class TeacherModule { }
