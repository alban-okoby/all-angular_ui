import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule],
  template: `
   <mat-toolbar class="mat-elevation-z3">
  <button mat-icon-button (click)="collapsed.set(!collapsed())">
    <mat-icon>menu</mat-icon>
  </button>
</mat-toolbar>
<mat-sidenav-container>
  <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">
    <app-custom-sidenav [collapsed]="collapsed()" />
  </mat-sidenav>
  <mat-sidenav-content class="content" [style.margin-left]="sidenavWidth()">
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>

    <router-outlet />
  `,
  styles: `
    mat-sidenav-container {
      height: calc(100vh - 64px);
    }
    
  `,
})
export class AppComponent {
  title = 'yt-sidebar';
  collapsed = signal(false);
sidenavWidth = computed(() => (this.collapsed() ? "65px" : "250px"));
}
