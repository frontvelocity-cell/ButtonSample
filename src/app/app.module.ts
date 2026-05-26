import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { FlightAssignmentTableComponent } from './components/flight-assignment-table/flight-assignment-table.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    MainContentComponent,
    FooterComponent,
    StatsCardComponent,
    FlightAssignmentTableComponent,
    EmployeeTableComponent,
    QuickActionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }