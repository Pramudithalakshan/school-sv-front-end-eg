import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Teacher } from './page/dashboard/teacher/teacher';
import { Login } from './page/login/login';
import { DashboardRoot } from './page/dashboard/dashboard-root/dashboard-root';
import { User } from './page/dashboard/user/user';

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
                path:"user",
                component:User
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
