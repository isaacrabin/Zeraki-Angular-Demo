import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPieComponent } from './student-pie.component';

describe('StudentPieComponent', () => {
  let component: StudentPieComponent;
  let fixture: ComponentFixture<StudentPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
