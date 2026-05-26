import { Component } from '@angular/core';

interface QuickAction {
  icon: string;
  label: string;
  color: string;
  bgColor: string;
}

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss']
})
export class QuickActionsComponent {
  // Merged actions array with consistent Material Design icons and proper color theming
  actions: QuickAction[] = [
    {
      icon: 'person_add', // Using Material Design icon instead of emoji for consistency
      label: 'Add Employee',
      color: '#3a8cff', // Using specific hex color instead of generic 'blue'
      bgColor: 'rgba(58, 140, 255, 0.06)' // Added background color for better UI
    },
    {
      icon: 'work', // Using Material Design icon instead of emoji
      label: 'Add Manager',
      color: '#0d8c3e', // Using specific hex color instead of generic 'green'
      bgColor: 'rgba(13, 140, 62, 0.05)' // Added background color for consistency
    },
    {
      icon: 'flight_takeoff', // Using Material Design icon instead of emoji
      label: 'Add Flight Assignment',
      color: '#3a8cff',
      bgColor: 'rgba(58, 140, 255, 0.1)'
    },
    {
      icon: 'search', // Using Material Design icon instead of emoji
      label: 'Search Records',
      color: '#0d8c3e',
      bgColor: 'rgba(13, 140, 62, 0.05)'
    },
    {
      icon: 'assessment', // Using Material Design icon instead of emoji
      label: 'Generate Report',
      color: '#3a8cff',
      bgColor: 'white' // Maintained white background for visual hierarchy
    }
  ];
}