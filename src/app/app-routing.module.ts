```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Merged routing configuration - consolidated duplicate routes and optimized redirects
const routes: Routes = [
  // Root path redirects to dashboard with full path matching for better performance
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Dashboard component route
  { path: 'dashboard', component: DashboardComponent },
  // Wildcard route redirects to dashboard instead of empty path for consistency
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```