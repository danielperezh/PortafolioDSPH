import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ResumenComponent } from './resumen/resumen.component';

const routes: Routes = [
  { path: '',  component: AppComponent, pathMatch: 'full' },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'sobre_mi', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'resumen', component: ResumenComponent },
  { path : '**', redirectTo: '/',pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
