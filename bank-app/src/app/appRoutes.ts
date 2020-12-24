 import { Routes } from '@angular/router';
 import { LoginComponent } from '../app/pages/login/login.component';
 import { DashboardComponent } from './dashboard/dashboard/dashboard.component'

export const appRoutes: Routes = [
{path: 'login', component: LoginComponent},
{path: '', component: LoginComponent, pathMatch: 'full'},
{path: 'dashboard', component: DashboardComponent},
//{path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
]