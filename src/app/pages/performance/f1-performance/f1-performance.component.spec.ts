import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1PerformanceComponent } from './f1-performance.component';

describe('F1PerformanceComponent', () => {
  let component: F1PerformanceComponent;
  let fixture: ComponentFixture<F1PerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F1PerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F1PerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
