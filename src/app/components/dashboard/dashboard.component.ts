import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Updated to .scss for better styling support
})
export class DashboardComponent implements OnInit {
  // Merged and standardized property naming
  title = 'Dashboard'; // Consolidated from dashboardTitle and title properties
  
  // Enhanced user object with role information
  user = {
    name: 'Alex',
    role: 'Administrator'
  };
  
  constructor() { }

  ngOnInit(): void {
    // Added initialization logging for debugging
    console.log('Dashboard component initialized');
  }
}