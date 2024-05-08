import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedBarLineStudentComponent } from './mixed-bar-line-student.component';

describe('MixedBarLineStudentComponent', () => {
  let component: MixedBarLineStudentComponent;
  let fixture: ComponentFixture<MixedBarLineStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedBarLineStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixedBarLineStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
