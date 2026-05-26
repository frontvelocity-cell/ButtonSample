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
import { FlightAssignmentTableComponent } from './components/flight-assignment-table/flight-assignment-table.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
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
    FlightAssignmentTableComponent,
    EmployeeTableComponent,
    QuickActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Merged: Using AppRoutingModule instead of RouterModule.forRoot([]) for better routing organization
    RouterModule // Kept for potential direct router usage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```