import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo:'welcome',
    pathMatch:'full'
  },
  {
    path:"welcome",
    component:LandingComponent
  },
  {
    path: 'app',
    loadChildren: ()=> import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  }
];
