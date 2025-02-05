import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ResumeComponent } from './resume/resume.component';
import { PythonComponent } from './python/python.component';
export const routes: Routes = [
    { path: '*', component: AppComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'python', component: PythonComponent }
];

/*
    { path: 'calc', component: CalcComponent },

*/
