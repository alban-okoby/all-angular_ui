import { Routes } from '@angular/router';
import { QrScanComponent } from './qr-scan/qr-scan.component';

export const routes: Routes = [
  {
    path: 'qr-code', component: QrScanComponent
  },
  {
    path: '', redirectTo: 'qr-code', pathMatch: 'full'
  }
];
