import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core-components/home/home.component';
import { EventsListComponent } from './core-components/events-list/events-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'events-list', component: EventsListComponent},
  { path: 'event-detail/:eventId', component: EventsListComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
