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
import { AddhomeComponent } from './views/home/addhome/addhome.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AdminComponent,
    ViewsComponent,
    PortfolioComponent,
    EducationExperienceComponent,
    AboutComponent,
    HomeComponent,
    AddhomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatDialogModule, MatFormFieldModule, MatTooltipModule
  ],
  exports: [
    AdminComponent,
    ViewsComponent,
    PortfolioComponent,
    EducationExperienceComponent,
    AboutComponent,
    HomeComponent,
    AddhomeComponent
  ]
})
export class PagesModule { }
