import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrScanComponent } from './qr-scan.component';

describe('QrScanComponent', () => {
  let component: QrScanComponent;
  let fixture: ComponentFixture<QrScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrScanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
