import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom components
import { HeaderComponent } from './shared/header/header.component';
import { NavbarRightComponent } from './shared/header/navbar-right/navbar-right.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { LogoComponent } from './shared/logo/logo.component';
import { NavbarLeftComponent } from './shared/header/navbar-left/navbar-left.component';
import { NavbarCenterComponent } from './shared/header/navbar-center/navbar-center.component';
import { FooterComponent } from './shared/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    LogoComponent,
    NavbarRightComponent,
    NavbarLeftComponent,
    NavbarCenterComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    LogoComponent,
    NavbarRightComponent,
    NavbarLeftComponent,
  ]
})
export class ThemeModule { }
