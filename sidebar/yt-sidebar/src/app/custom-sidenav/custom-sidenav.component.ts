import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatIconModule],
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
  `,
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  collapsed = signal(false);
  sidenavWidth = computed(() => (this.collapsed() ? "65px" : "250px"));
}
