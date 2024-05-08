import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledVsTotalComponent } from './enrolled-vs-total.component';

describe('EnrolledVsTotalComponent', () => {
  let component: EnrolledVsTotalComponent;
  let fixture: ComponentFixture<EnrolledVsTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrolledVsTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnrolledVsTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
