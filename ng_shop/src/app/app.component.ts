import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_shop';

  status = false;
  currentDate = new Date();

  addToggle() {
    this.status = !this.status;
  }
}
