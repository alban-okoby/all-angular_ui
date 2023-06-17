import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ViewsComponent } from './views/views.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { EducationExperienceComponent } from './views/education-experience/education-experience.component';
import { AboutComponent } from './views/about/about.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    ViewsComponent,
    PortfolioComponent,
    EducationExperienceComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    EducationExperienceComponent
  ]
})
export class PagesModule { }
