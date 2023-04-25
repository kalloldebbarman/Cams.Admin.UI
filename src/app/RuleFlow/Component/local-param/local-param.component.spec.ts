import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalParamComponent } from './local-param.component';

describe('LocalParamComponent', () => {
  let component: LocalParamComponent;
  let fixture: ComponentFixture<LocalParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalParamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
