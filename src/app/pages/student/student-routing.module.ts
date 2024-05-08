import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectAnalysisComponent } from './subject-analysis/subject-analysis.component';

const routes: Routes = [
  {
    path: "analytics",
    component: DashboardComponent
  },
  {
    path: ":id",
    component: SubjectAnalysisComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
