import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'performance',
    loadChildren: () => import('./performance/performance.module').then(m => m.PerformanceModule)
  },
  {
    path:'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path:'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
