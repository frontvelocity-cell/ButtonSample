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
    initials: 'AT', // Merged: kept 'initials' as primary property name for user avatar display
    avatar: 'AT'    // Merged: kept 'avatar' as alias for backward compatibility
  };
}