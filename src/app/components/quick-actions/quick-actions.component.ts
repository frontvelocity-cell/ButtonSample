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
  actions: QuickAction[] = [
    {
      icon: 'person_add',
      label: 'Add Employee',
      color: '#3a8cff',
      bgColor: 'rgba(58, 140, 255, 0.06)'
    },
    {
      icon: 'work',
      label: 'Add Manager',
      color: '#0d8c3e',
      bgColor: 'rgba(13, 140, 62, 0.05)'
    },
    {
      icon: 'flight_takeoff',
      label: 'Add Flight Assignment',
      color: '#3a8cff',
      bgColor: 'rgba(58, 140, 255, 0.1)'
    },
    {
      icon: 'search',
      label: 'Search Records',
      color: '#0d8c3e',
      bgColor: 'rgba(13, 140, 62, 0.05)'
    },
    {
      icon: 'assessment',
      label: 'Generate Report',
      color: '#3a8cff',
      bgColor: 'white'
    }
  ];
}