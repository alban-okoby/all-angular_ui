import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Home } from 'src/app/core/models/home';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // isAdmin = false;

  // users: any = {
  //   role : "admin",
  //   isAdmin: true
  // }

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
        console.log(response);
      }
    )
  }
}
