import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsAdminComponent } from './layouts/is-admin/is-admin.component';
import { IsGuestComponent } from './layouts/is-guest/is-guest.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,

    IsAdminComponent,
    IsGuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
