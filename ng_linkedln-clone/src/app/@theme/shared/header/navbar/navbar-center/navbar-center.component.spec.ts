import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCenterComponent } from './navbar-center.component';

describe('NavbarCenterComponent', () => {
  let component: NavbarCenterComponent;
  let fixture: ComponentFixture<NavbarCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
