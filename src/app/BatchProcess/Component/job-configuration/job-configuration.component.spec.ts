import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobConfigurationComponent } from './job-configuration.component';

describe('CreateJobComponent', () => {
  let component: JobConfigurationComponent;
  let fixture: ComponentFixture<JobConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
