import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPassVsFailComponent } from './student-pass-vs-fail.component';

describe('StudentPassVsFailComponent', () => {
  let component: StudentPassVsFailComponent;
  let fixture: ComponentFixture<StudentPassVsFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPassVsFailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPassVsFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
