import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() caption: string = '';
  @Input() color: string = 'blue';
  @Input() bgColor: string = '#eef4ff';
  
  getValueColor(): string {
    switch (this.color) {
      case 'green': return '#18a957';
      case 'blue': return '#1686e8';
      case 'orange': return '#d59b11';
      default: return '#0008d5';
    }
  }
}