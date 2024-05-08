import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F4PerformanceComponent } from './f4-performance.component';

describe('F4PerformanceComponent', () => {
  let component: F4PerformanceComponent;
  let fixture: ComponentFixture<F4PerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F4PerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F4PerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
