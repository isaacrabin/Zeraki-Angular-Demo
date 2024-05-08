import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancePerSubjectComponent } from './performance-per-subject.component';

describe('PerformancePerSubjectComponent', () => {
  let component: PerformancePerSubjectComponent;
  let fixture: ComponentFixture<PerformancePerSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformancePerSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerformancePerSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
