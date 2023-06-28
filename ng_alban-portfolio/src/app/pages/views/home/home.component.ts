import { Component, Inject, OnInit, Optional, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { Home } from 'src/app/core/models/home';
import { HomeService } from 'src/app/core/services/home.service';
import { AboutComponent } from '../about/about.component';
import { AddhomeComponent } from './addhome/addhome.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // isAdmin = false;

  // users: any = {
  //   role : "admin",
  //   isAdmin: true
  // }

  home!: Home[];
  oneHome!: Home;
  homeForm!: FormGroup;

  constructor(private router: Router,
    private homeService: HomeService,
    private formBuilder: FormBuilder,
    // @Inject(MAT_DIALOG_DATA) public data: Array<any>,
    private dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.getHome();

    // this.oneHome = this.data[0] || new Home();
    this.homeForm = this.formBuilder.group({
      salutation: [this.oneHome.salutation, [Validators.required]],
      description: [this.oneHome.description, [Validators.required]],
      quote: [this.oneHome.quote, [Validators.required]]
    });
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

  openEditHomeForm(home: Home) {
    this.dialog.open(AddhomeComponent, {
      width: '600px',
      height: '600px',
      data: [home]
    })
  }
  setAttributes() {
    this.oneHome.salutation = this.salutation.value;
    this.oneHome.description = this.description.value;
    this.oneHome.quote = this.quote.value;
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
    this.setAttributes();
    this.homeService.updateHome(this.oneHome).subscribe(
      (response : Home) => {
        this.getHome();
      }
    )
  }
}
