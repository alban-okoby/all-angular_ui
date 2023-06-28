import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Material Modules
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,  FormsModule, MatDialogModule, MatFormFieldModule, MatTooltipModule
  ],
  exports: [
    FooterComponent,
        SidebarComponent,
        NotFoundComponent
  ],
  providers: [
    { provide:  MAT_DIALOG_DATA, useValue : {}},
  ]
})
export class SharedModule { }
