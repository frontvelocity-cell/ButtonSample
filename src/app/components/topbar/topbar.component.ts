import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  user = {
    name: 'Alex Thompson',
    role: 'Administrator',
    initials: 'AT'
  };
}