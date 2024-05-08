import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsPerformanceComponent } from './students-performance/students-performance.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {
    path: "analytics",
    component: DashboardComponent
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
