import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  stats = [
    {
      icon: 'group',
      title: 'Employees',
      value: '128',
      caption: 'Total employees in the system',
      color: 'blue',
      bgColor: '#eef4ff'
    },
    {
      icon: 'work',
      title: 'Managers',
      value: '18',
      caption: 'Total managers in the system',
      color: 'green',
      bgColor: '#e9f9ec'
    },
    {
      icon: 'flight',
      title: 'Flight Assignments',
      value: '245',
      caption: 'Total flight assignments',
      color: 'blue',
      bgColor: '#eaf2ff'
    },
    {
      icon: 'event',
      title: 'Upcoming Flights',
      value: '32',
      caption: 'In next 7 days',
      color: 'orange',
      bgColor: '#fff7de'
    }
  ];
}