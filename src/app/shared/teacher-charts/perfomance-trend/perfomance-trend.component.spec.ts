import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfomanceTrendComponent } from './perfomance-trend.component';

describe('PerfomanceTrendComponent', () => {
  let component: PerfomanceTrendComponent;
  let fixture: ComponentFixture<PerfomanceTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfomanceTrendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfomanceTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
