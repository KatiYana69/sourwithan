import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: '*', component: AppComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
];

/*
    { path: 'calc', component: CalcComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'python', component: PythonComponent },
*/
