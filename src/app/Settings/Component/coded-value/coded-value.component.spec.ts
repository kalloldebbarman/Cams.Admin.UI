import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodedValueComponent } from './coded-value.component';

describe('CodedValueComponent', () => {
  let component: CodedValueComponent;
  let fixture: ComponentFixture<CodedValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodedValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
