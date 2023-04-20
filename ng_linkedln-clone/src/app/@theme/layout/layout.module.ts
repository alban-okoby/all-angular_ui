import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AuthentificatedComponent } from './authentificated/authentificated.component';
import { GuestComponent } from './guest/guest.component';


@NgModule({
  declarations: [
    GuestComponent,
    AdminComponent,
    AuthentificatedComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LayoutModule { }
