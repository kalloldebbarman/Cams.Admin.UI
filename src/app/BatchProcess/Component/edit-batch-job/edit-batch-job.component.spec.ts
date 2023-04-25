import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBatchJobComponent } from './edit-batch-job.component';

describe('EditBatchJobComponent', () => {
  let component: EditBatchJobComponent;
  let fixture: ComponentFixture<EditBatchJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBatchJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBatchJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
