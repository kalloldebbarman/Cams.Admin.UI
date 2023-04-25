import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerDashBoardComponent } from './scheduler-dash-board.component';

describe('SchedulerDashBoardComponent', () => {
  let component: SchedulerDashBoardComponent;
  let fixture: ComponentFixture<SchedulerDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
