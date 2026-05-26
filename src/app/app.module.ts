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
// Table Components
import { FlightAssignmentsTableComponent } from './components/flight-assignments-table/flight-assignments-table.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    // Layout Components - Merged from both versions
    TopbarComponent,
    SidebarComponent,
    MainContentComponent, // Added from first version
    FooterComponent,
    // Feature Components - Merged and deduplicated
    DashboardComponent,
    StatsCardComponent, // Added from first version
    StatsComponents,
    // Table Components - Consolidated from both versions
    FlightAssignmentsTableComponent,
    EmployeesTableComponent,
    QuickActionsComponent
  ],
  imports: [
    BrowserModule,
    // Using AppRoutingModule instead of inline RouterModule.forRoot() for better separation of concerns
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```