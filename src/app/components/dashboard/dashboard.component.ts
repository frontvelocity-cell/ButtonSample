import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Using .scss for enhanced styling capabilities
})
export class DashboardComponent implements OnInit {
  // Consolidated title property from multiple versions
  title = 'Dashboard';
  
  // Enhanced user object with role information for better user management
  user = {
    name: 'Alex',
    role: 'Administrator'
  };
  
  constructor() { }

  ngOnInit(): void {
    // Added initialization logging for debugging and monitoring
    console.log('Dashboard component initialized');
  }
}