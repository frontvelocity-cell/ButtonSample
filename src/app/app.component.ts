import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-topbar></app-topbar>
      <div class="app-content">
        <app-sidebar></app-sidebar>
        <main class="main-content">
          <router-outlet></router-outlet>
        </main>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.scss'] // Using SCSS for better styling capabilities and enhanced theming support
})
export class AppComponent {
  title = 'Flight Management Dashboard'; // More descriptive and specific title for better user experience
}