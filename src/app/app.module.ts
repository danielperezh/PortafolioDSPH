import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProyectoModalComponent } from './proyecto-modal/proyecto-modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const firebaseConfig = {
  apiKey: "AIzaSyDe4L5U1EXgUiEQjdVuJmFLhxUG0Gol1Fs",
  authDomain: "portafolio-fc29d.firebaseapp.com",
  databaseURL: "https://portafolio-fc29d-default-rtdb.firebaseio.com",
  projectId: "portafolio-fc29d",
  storageBucket: "portafolio-fc29d.appspot.com",
  messagingSenderId: "407548807884",
  appId: "1:407548807884:web:cefd9a4f4c1fad52e55069",
  measurementId: "G-RP4E9609P5"
};


@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    PortafolioComponent,
    BlogComponent,
    ContactoComponent,
    ProyectoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    CollapseModule.forRoot( ),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
