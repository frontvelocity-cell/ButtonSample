```typescript
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
  // Merged actions array with consistent Material Design icons and CSS custom properties for theming
  actions: QuickAction[] = [
    {
      icon: 'group_add', // Using more semantic Material Design icon for adding employees
      label: 'Add Employee',
      color: 'var(--secondary-color)', // Using CSS custom properties for consistent theming
      bgColor: 'rgba(59, 140, 232, 0.1)' // Standardized background opacity for consistency
    },
    {
      icon: 'work', // Consistent Material Design icon for work-related actions
      label: 'Add Manager',
      color: 'var(--success-color)', // Using CSS custom properties for success state
      bgColor: 'rgba(24, 169, 87, 0.1)' // Standardized success color background
    },
    {
      icon: 'flight_takeoff', // Material Design icon for flight-related actions
      label: 'Add Flight Assignment',
      color: 'var(--secondary-color)', // Consistent secondary color usage
      bgColor: 'rgba(59, 140, 232, 0.1)' // Matching secondary color background
    },
    {
      icon: 'search', // Material Design search icon
      label: 'Search Records',
      color: 'var(--success-color)', // Using success color for search actions
      bgColor: 'rgba(24, 169, 87, 0.1)' // Consistent success background
    },
    {
      icon: 'assessment', // Material Design icon for reports and analytics
      label: 'Generate Report',
      color: 'var(--secondary-color)', // Secondary color for report generation
      bgColor: 'var(--surface)' // Using CSS custom property for surface color
    }
  ];
}
```