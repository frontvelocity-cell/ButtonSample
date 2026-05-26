import { Component } from '@angular/core';

// Interface for type safety and better code organization
interface StatCard {
  icon: string;
  title: string;
  value: string; // Renamed from 'number' to 'value' for better semantic meaning
  caption: string;
  color: string;
  bgColor: string;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  // Merged stats array with improved consistency and CSS custom properties
  stats: StatCard[] = [
    {
      icon: 'group', // Using Material Icons instead of emoji for consistency
      title: 'Employees',
      value: '128',
      caption: 'Total employees in the system',
      color: 'var(--primary-color)', // Using CSS custom properties for better theming
      bgColor: '#EEF2FF'
    },
    {
      icon: 'work',
      title: 'Managers',
      value: '18',
      caption: 'Total managers in the system',
      color: 'var(--success-color)',
      bgColor: '#E7F5E7'
    },
    {
      icon: 'flight',
      title: 'Flight Assignments',
      value: '245',
      caption: 'Total flight assignments',
      color: 'var(--secondary-color)',
      bgColor: '#E7F0FF'
    },
    {
      icon: 'event',
      title: 'Upcoming Flights',
      value: '32',
      caption: 'In next 7 days',
      color: 'var(--warning-color)',
      bgColor: '#FFF7E6'
    }
  ];
}