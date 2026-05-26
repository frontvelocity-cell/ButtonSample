import { Component } from '@angular/core';

interface FlightAssignment {
  flightCode: string;
  employee: string;
  route: string;
  travelDate: string;
  status: 'Confirmed' | 'Scheduled';
}

@Component({
  selector: 'app-flight-assignment-table',
  templateUrl: './flight-assignment-table.component.html',
  styleUrls: ['./flight-assignment-table.component.scss']
})
export class FlightAssignmentTableComponent {
  assignments: FlightAssignment[] = [
    {
      flightCode: 'FL1234',
      employee: 'Sarah Johnson',
      route: 'DEL → BOM',
      travelDate: '20 May 2026',
      status: 'Confirmed'
    },
    {
      flightCode: 'FL5678',
      employee: 'Michael Chen',
      route: 'BOM → BLR',
      travelDate: '21 May 2026',
      status: 'Confirmed'
    },
    {
      flightCode: 'FL9012',
      employee: 'Priya Sharma',
      route: 'DEL → HYD',
      travelDate: '22 May 2026',
      status: 'Confirmed'
    },
    {
      flightCode: 'FL3456',
      employee: 'David Wilson',
      route: 'BLR → MAA',
      travelDate: '23 May 2026',
      status: 'Confirmed'
    },
    {
      flightCode: 'FL7890',
      employee: 'Emily Davis',
      route: 'BOM → DEL',
      travelDate: '24 May 2026',
      status: 'Scheduled'
    }
  ];
}