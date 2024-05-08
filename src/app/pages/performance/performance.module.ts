import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { F1PerformanceComponent } from './f1-performance/f1-performance.component';
import { HistoricalPerformanceComponent } from './historical-performance/historical-performance.component';
import { F2PerformanceComponent } from './f2-performance/f2-performance.component';
import { F3PerformanceComponent } from './f3-performance/f3-performance.component';
import { F4PerformanceComponent } from './f4-performance/f4-performance.component';

@NgModule({
  declarations: [
    F1PerformanceComponent,
    F2PerformanceComponent,
    F3PerformanceComponent,
    F4PerformanceComponent,
    HistoricalPerformanceComponent,

  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    SharedModule
  ]
})
export class PerformanceModule { }
