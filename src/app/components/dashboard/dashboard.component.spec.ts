import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Merged test cases for title property validation
  // Combined 'should have correct title' and 'should have dashboard title'
  // Using the more specific property name 'dashboardTitle' from the second version
  it('should have dashboard title', () => {
    expect(component.dashboardTitle).toBe('Dashboard');
  });

  // Enhanced DOM rendering test with proper TypeScript typing
  // Added optional chaining operator for safer DOM querying
  it('should render dashboard title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.dashboard-title')?.textContent).toContain('Dashboard');
  });
});