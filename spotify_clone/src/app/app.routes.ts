import { Routes } from '@angular/router';

// Custom components
import { HomeComponent } from './pages/home/home.component';
import { GuestComponent } from './pages/guest/guest.component';
import { TestComponent } from './pages/test/test.component';
import { MusicsComponent } from './pages/musics/musics.component';
import { LayoutComponent } from './layout/layout.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'guest', component: GuestComponent, pathMatch: 'full' },
      { path: 'search', component: SearchComponent, pathMatch: 'full' },
      { path: 'musics', component: MusicsComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
