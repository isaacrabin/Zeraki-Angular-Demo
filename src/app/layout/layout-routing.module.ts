import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component: LayoutComponent,
    children:[
      { path: "", redirectTo: "analytics", pathMatch: "full" },
      {
        path:'analytics',
        component:DashboardComponent
      },
      {
        path:'dashboard',
        loadChildren: ()=> import('../pages/pages.module').then(m => m.PagesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
