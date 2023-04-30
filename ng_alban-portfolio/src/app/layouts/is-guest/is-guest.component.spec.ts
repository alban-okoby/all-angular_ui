import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsGuestComponent } from './is-guest.component';

describe('IsGuestComponent', () => {
  let component: IsGuestComponent;
  let fixture: ComponentFixture<IsGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
