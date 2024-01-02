// app.component.ts
import { Component, OnInit } from '@angular/core';
import { proyect } from './models/proyect';
import { ProyectsService } from './services/proyects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portafolioDSPH';
  infoProyecto = {} as proyect;

  constructor(private proyectosService: ProyectsService, private router: Router) {}

  ngOnInit(): void {
    this.proyectosService.currentProyect$.subscribe((proyect) => {
      this.infoProyecto = proyect || ({} as proyect);
    });
  }

  abrirDemo(){
    const url = this.infoProyecto.proyectLinkDemo;
    window.open(url, "_blank")
  }

  abrirCodigo(){
    const url = this.infoProyecto.proyectLinkCodigo;
    window.open(url, "_blank")
  }

  tieneEnlaceDemo(): boolean {
    return !!this.infoProyecto.proyectLinkDemo; // Devuelve true si hay un enlace de demo, false si está vacío
  }

}
