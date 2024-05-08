import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F2PerformanceComponent } from './f2-performance.component';

describe('F2PerformanceComponent', () => {
  let component: F2PerformanceComponent;
  let fixture: ComponentFixture<F2PerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F2PerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F2PerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
