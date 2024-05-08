import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAnalysisComponent } from './subject-analysis.component';

describe('SubjectAnalysisComponent', () => {
  let component: SubjectAnalysisComponent;
  let fixture: ComponentFixture<SubjectAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
