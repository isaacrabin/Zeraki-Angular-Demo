import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedLineBarComponent } from './mixed-line-bar.component';

describe('MixedLineBarComponent', () => {
  let component: MixedLineBarComponent;
  let fixture: ComponentFixture<MixedLineBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixedLineBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixedLineBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
