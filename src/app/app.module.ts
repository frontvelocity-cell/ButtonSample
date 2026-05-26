```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// Layout Components
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
// Feature Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { StatsComponent } from './components/stats/stats.component';
import { FlightAssignmentTableComponent } from './components/flight-assignment-table/flight-assignment-table.component';
import { FlightAssignmentsTableComponent } from './components/flight-assignments-table/flight-assignments-table.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    // Layout Components
    TopbarComponent,
    SidebarComponent,
    MainContentComponent,
    FooterComponent,
    // Feature Components
    DashboardComponent,
    StatsCardComponent,
    StatsComponent, // Merged: Added StatsComponent from second version
    FlightAssignmentTableComponent,
    FlightAssignmentsTableComponent, // Merged: Added FlightAssignmentsTableComponent from second version
    EmployeeTableComponent,
    EmployeesTableComponent, // Merged: Added EmployeesTableComponent from second version
    QuickActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Merged: Using AppRoutingModule for better routing organization
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: '**', redirectTo: '' }
    ]) // Merged: Added inline routing from second version as fallback
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```