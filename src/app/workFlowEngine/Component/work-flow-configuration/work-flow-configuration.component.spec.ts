import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFlowConfigurationComponent } from './work-flow-configuration.component';

describe('WorkFlowConfigurationComponent', () => {
  let component: WorkFlowConfigurationComponent;
  let fixture: ComponentFixture<WorkFlowConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFlowConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFlowConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
