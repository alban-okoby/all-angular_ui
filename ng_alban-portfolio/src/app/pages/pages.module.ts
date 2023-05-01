import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ViewsComponent } from './views/views.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from '../shared/footer/footer.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';



@NgModule({
  declarations: [
    AdminComponent,
    ViewsComponent,
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class PagesModule { }
