import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent {
  employees = [
    {
      id: 'E1001',
      name: 'Sarah Johnson',
      designation: 'Senior Analyst',
      department: 'Operations'
    },
    {
      id: 'E1002',
      name: 'Michael Chen',
      designation: 'Flight Coordinator',
      department: 'Operations'
    },
    {
      id: 'E1003',
      name: 'Priya Sharma',
      designation: 'Data Analyst',
      department: 'Planning'
    },
    {
      id: 'E1004',
      name: 'David Wilson',
      designation: 'Pilot',
      department: 'Flight Ops'
    },
    {
      id: 'E1005',
      name: 'Emily Davis',
      designation: 'Scheduler',
      department: 'Operations'
    }
  ];
}