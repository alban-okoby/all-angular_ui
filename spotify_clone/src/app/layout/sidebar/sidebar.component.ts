import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchLoadingComponent } from '../../components/loading/search-loading/search-loading.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, SearchLoadingComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
