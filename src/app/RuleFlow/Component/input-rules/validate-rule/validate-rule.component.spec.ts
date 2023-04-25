import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateRuleComponent } from './validate-rule.component';

describe('ValidateRuleComponent', () => {
  let component: ValidateRuleComponent;
  let fixture: ComponentFixture<ValidateRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
