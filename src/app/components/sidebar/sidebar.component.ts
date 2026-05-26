import { Component } from '@angular/core';

interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
  link?: string;
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
      active: false,
      children: [
        { icon: '', label: 'Employees', link: '/employees' },
        { icon: '', label: 'Add Employee', link: '/employees/add' },
        { icon: '', label: 'Search Employees', link: '/employees/search' }
      ]
    },
    {
      icon: 'work',
      label: 'Manager Management',
      active: false
    },
    {
      icon: 'flight',
      label: 'Flight Management',
      active: false
    },
    {
      icon: 'admin_panel_settings',
      label: 'Administration',
      active: false
    }
  ];
}