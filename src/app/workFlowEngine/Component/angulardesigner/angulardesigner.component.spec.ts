import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardesignerComponent } from './angulardesigner.component';

describe('AngulardesignerComponent', () => {
  let component: AngulardesignerComponent;
  let fixture: ComponentFixture<AngulardesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngulardesignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulardesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
