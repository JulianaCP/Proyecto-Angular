import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { RouterModule} from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ROUTES } from "./app.routing";
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HttpModule } from '@angular/http';
import { GalleryComponent } from './gallery/gallery.component';
import { DataService } from './data.service';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    Parallax,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


let list: any[] = [1, true, "free"];