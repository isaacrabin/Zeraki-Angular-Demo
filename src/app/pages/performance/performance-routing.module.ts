import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F1PerformanceComponent } from './f1-performance/f1-performance.component';
import { F2PerformanceComponent } from './f2-performance/f2-performance.component';
import { F4PerformanceComponent } from './f4-performance/f4-performance.component';
import { F3PerformanceComponent } from './f3-performance/f3-performance.component';

const routes: Routes = [
  {
    path:'f1',
    component: F1PerformanceComponent
  },
  {
    path:'f2',
    component: F2PerformanceComponent
  },
  {
    path:'f3',
    component: F3PerformanceComponent
  },
  {
    path:'f4',
    component: F4PerformanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
