import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriggerConfifigurationComponent } from './trigger-confifiguration.component';

describe('TriggerConfifigurationComponent', () => {
  let component: TriggerConfifigurationComponent;
  let fixture: ComponentFixture<TriggerConfifigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriggerConfifigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriggerConfifigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
