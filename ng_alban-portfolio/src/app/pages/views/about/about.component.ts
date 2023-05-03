import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Home } from '../../../core/models/home';
import { HomeService } from '../../../core/services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  home!: Home[];

  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {
    this.getHome();
  }

  /**
   * getHome : retrieve home(description , salutation)
   */
  public getHome(): void {
    this.homeService.getHome().subscribe(
      (response : Home[]) => {
        this.home = response;
      }
    )
  }

}
