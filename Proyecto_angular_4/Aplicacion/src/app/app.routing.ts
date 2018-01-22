import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { RegistroComponent } from "./registro/registro.component";
import { HomeComponent } from "./home/home.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";

export const ROUTES: Routes = [
    {
        path:'', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent                
    },
    {
        path: 'registro',component: RegistroComponent
    },
    {
        path: 'home', component: HomeComponent, children: [
            {path: 'header', component: HeaderComponent},
            {path: 'gallery', component: GalleryComponent},
            {path: 'contact', component: ContactComponent}
        ]
    }


    
];