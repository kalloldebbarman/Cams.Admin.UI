import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBatchJobParameterComponent } from './add-batch-job-parameter.component';

describe('AddBatchJobParameterComponent', () => {
  let component: AddBatchJobParameterComponent;
  let fixture: ComponentFixture<AddBatchJobParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBatchJobParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBatchJobParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
