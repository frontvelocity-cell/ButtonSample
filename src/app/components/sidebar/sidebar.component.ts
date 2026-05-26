import { Component } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    {
      icon: 'home',
      label: 'Dashboard',
      active: true
    },
    {
      icon: 'group',
      label: 'Employee Management',
      children: [
        { icon: '', label: 'Employees' },
        { icon: '', label: 'Add Employee' },
        { icon: '', label: 'Search Employees' }
      ]
    },
    {
      icon: 'work',
      label: 'Manager Management'
    },
    {
      icon: 'flight',
      label: 'Flight Management'
    },
    {
      icon: 'admin_panel_settings',
      label: 'Administration'
    }
  ];
}