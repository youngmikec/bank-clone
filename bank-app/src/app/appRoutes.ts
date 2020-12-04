 import { Routes } from '@angular/router';
 import { LoginComponent } from './pages/login/login/login.component';

export const appRoutes: Routes = [
{path: 'login', component: LoginComponent},
{path: '', component: LoginComponent, pathMatch: 'full'},
//{path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
]