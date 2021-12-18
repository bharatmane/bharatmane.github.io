import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidCalendarComponent } from './kid-calendar.component';

describe('KidCalendarComponent', () => {
  let component: KidCalendarComponent;
  let fixture: ComponentFixture<KidCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
