import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] // Changed from .css to .scss to support both styles
})
export class DashboardComponent implements OnInit {
  // Merged properties from both versions
  title = 'Dashboard';
  user = {
    name: 'Alex',
    role: 'Administrator'
  };
  
  constructor() { }

  ngOnInit(): void {
    console.log('Dashboard component initialized');
  }
}