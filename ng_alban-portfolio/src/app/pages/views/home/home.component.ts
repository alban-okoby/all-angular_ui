import { Component, Optional } from '@angular/core';
import { Router } from '@angular/router';

import { Home } from 'src/app/core/models/home';
import { HomeService } from 'src/app/core/services/home.service';
import { AboutComponent } from '../about/about.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  oneHome!: Home;
  homeForm!: FormGroup;

  constructor(private router: Router, private homeService: HomeService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.homeForm = this.formBuilder.group({
      salutation: [this.oneHome.salutation, [Validators.required]],
      description: [this.oneHome.description, [Validators.required]],
      quote: [this.oneHome.quote, [Validators.required]]
    });
    this.getHome();
  }

  get salutation() {
    return this.homeForm.get('salutation') as FormControl;
  }
  get description() {
    return this.homeForm.get('description') as FormControl;
  }
  get quote() {
    return this.homeForm.get('quote') as FormControl;
  }

  /**
   * getHome : retrieve home(description , salutation, quote)
   */
  public getHome(): void {
    this.homeService.getHome().subscribe(
      (response : any) => {
        this.home = response;
      }
    )
  }

  /**
   * updateHome : function to update home component
   * @param home : object that represent (description , salutation, quote)
   * @param id : id of home object
   */
  public updateHome(oneHome : Home) {
    this.homeService.updateHome(this.oneHome).subscribe(
      (response : Home) => {
        this.getHome();
      }
    )
  }
}
