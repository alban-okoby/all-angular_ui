import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsComponent } from './pages/views/views.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent
  },
  {
    path: 'admin/portfolio',
    component: AdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
