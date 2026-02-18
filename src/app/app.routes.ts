import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Teacher } from './page/dashboard/teacher/teacher';
import { Student } from './page/dashboard/student/student';
import { Login } from './page/login/login';
import { DashboardRoot } from './page/dashboard/dashboard-root/dashboard-root';

export const routes: Routes = [
    {
        path:"dashboard",
        component:Dashboard,
        children:[
            {
                path:"teacher",
                component:Teacher
            },
             {
                path:"student",
                component:Student
            },
            {
                path:"",
                component:DashboardRoot
            }
        ]
    },
    {
        path:"login",
        component:Login
    }
];
