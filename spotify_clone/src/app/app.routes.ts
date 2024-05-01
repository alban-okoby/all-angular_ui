import { Routes } from '@angular/router';

// Custom components
import { HomeComponent } from './pages/home/home.component';
import { GuestComponent } from './pages/guest/guest.component';
import { TestComponent } from './pages/test/test.component';
import { MusicsComponent } from './pages/musics/musics.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'guest', component: GuestComponent, pathMatch: 'full' },
  { path: 'test', component: TestComponent, pathMatch: 'full' },
  { path: 'musics', component: MusicsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
0
