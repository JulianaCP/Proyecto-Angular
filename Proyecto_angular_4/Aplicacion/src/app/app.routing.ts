import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { RegistroComponent } from "./registro/registro.component";
export const ROUTES: Routes = [
    {
        path:'', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'registro',component: RegistroComponent
    }
];