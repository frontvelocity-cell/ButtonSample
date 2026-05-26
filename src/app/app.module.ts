```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
// Table Components - Merged and deduplicated similar table components
import { FlightAssignmentsTableComponent } from './components/flight-assignments-table/flight-assignments-table.component';
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
    StatsComponent,
    // Table Components - Removed duplicates: FlightAssignmentTableComponent and EmployeeTableComponent
    FlightAssignmentsTableComponent,
    EmployeesTableComponent,
    QuickActionsComponent
  ],
  imports: [
    BrowserModule,
    // Removed RouterModule.forRoot() - AppRoutingModule handles all routing configuration
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```