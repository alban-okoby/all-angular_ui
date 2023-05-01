import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
