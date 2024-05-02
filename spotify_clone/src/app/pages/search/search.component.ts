import { Component } from '@angular/core';
import { SearchLoadingComponent } from '../../components/loading/search-loading/search-loading.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchLoadingComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}
