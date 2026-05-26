import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  stats = [
    {
      icon: '👥',
      number: '128',
      title: 'Employees',
      caption: 'Total employees in the system',
      color: 'blue',
      bgColor: '#eef5fe'
    },
    {
      icon: '💼',
      number: '18',
      title: 'Managers',
      caption: 'Total managers in the system',
      color: '#18a957',
      bgColor: '#e9f8ee'
    },
    {
      icon: '✈️',
      number: '245',
      title: 'Flight Assignments',
      caption: 'Total flight assignments',
      color: '#1686e8',
      bgColor: '#eaf5ff'
    },
    {
      icon: '📅',
      number: '32',
      title: 'Upcoming Flights',
      caption: 'In next 7 days',
      color: '#d59a11',
      bgColor: '#fff7df'
    }
  ];
}