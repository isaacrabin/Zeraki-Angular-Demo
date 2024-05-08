import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsPerformanceComponent } from './students-performance/students-performance.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AssessmentsComponent } from './assessments/assessments.component';

const routes: Routes = [
  {
    path: "analytics",
    component: DashboardComponent
  },
  {
    path: "assessments",
    component: AssessmentsComponent
  },
  {
    path: ":id",
    component: StudentsPerformanceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
