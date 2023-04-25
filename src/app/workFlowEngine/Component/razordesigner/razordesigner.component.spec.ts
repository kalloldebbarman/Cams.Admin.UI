import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RazordesignerComponent } from './razordesigner.component';

describe('RazordesignerComponent', () => {
  let component: RazordesignerComponent;
  let fixture: ComponentFixture<RazordesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RazordesignerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RazordesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
