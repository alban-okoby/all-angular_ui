import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeBannerComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeBannerComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeBannerComponent
  ]
})
export class CommonComponentsModule { }
