import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F3PerformanceComponent } from './f3-performance.component';

describe('F3PerformanceComponent', () => {
  let component: F3PerformanceComponent;
  let fixture: ComponentFixture<F3PerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F3PerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F3PerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
