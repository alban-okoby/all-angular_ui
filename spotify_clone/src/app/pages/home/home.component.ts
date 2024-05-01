import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layout/layout.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, LayoutModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      const page = params['page'];
      if (page === 'musics') {
      } else {
      }
    });
  }
}
