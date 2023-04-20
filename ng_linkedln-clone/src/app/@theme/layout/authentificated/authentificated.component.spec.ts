import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificatedComponent } from './authentificated.component';

describe('AuthentificatedComponent', () => {
  let component: AuthentificatedComponent;
  let fixture: ComponentFixture<AuthentificatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthentificatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthentificatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
