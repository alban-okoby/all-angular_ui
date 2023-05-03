import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isAdmin = false;

  users: any = {
    role : "admin",
    isAdmin: true
  }
}
