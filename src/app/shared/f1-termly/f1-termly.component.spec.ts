import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1TermlyComponent } from './f1-termly.component';

describe('F1TermlyComponent', () => {
  let component: F1TermlyComponent;
  let fixture: ComponentFixture<F1TermlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F1TermlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F1TermlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
