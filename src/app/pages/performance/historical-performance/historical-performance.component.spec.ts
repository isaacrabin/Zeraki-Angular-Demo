import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalPerformanceComponent } from './historical-performance.component';

describe('HistoricalPerformanceComponent', () => {
  let component: HistoricalPerformanceComponent;
  let fixture: ComponentFixture<HistoricalPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricalPerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricalPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
