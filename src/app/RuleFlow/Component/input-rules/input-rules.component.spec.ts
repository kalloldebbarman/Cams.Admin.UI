import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRulesComponent } from './input-rules.component';

describe('InputRulesComponent', () => {
  let component: InputRulesComponent;
  let fixture: ComponentFixture<InputRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
