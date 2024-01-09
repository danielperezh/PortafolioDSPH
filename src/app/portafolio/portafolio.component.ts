import { AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { proyect } from '../models/proyect';
import { tags } from '../models/tags';
import { ProyectsService } from '../services/proyects.service';
import { Tags } from '../interface/tags';
import $ from 'jquery';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit{

  proyects = {} as proyect[];

  isCollapsed: boolean = true;

  tagsState: Tags = {
    angular: false,
    java: false,
    Html: false,
    css: false,
    TypeScript: false,
    JavaScript: false,
    Csharp: false,
    Bootstrap: false,
    Net: false,
    ASPNET: false,
    AndroidStudio: false,
    SQLServer: false,
    PostgreSQL: false,
    Jupyter: false,
    node: false,
  };


  @Input() proyect = {} as proyect;

  constructor(private proyectosService: ProyectsService, private filterService: ServicioService){

  }

  ngOnInit(): void {
    this.proyects = this.proyectosService.obtenerProyectos();

    this.filterService.filter$.subscribe((tags) => {
      this.proyects = this.proyectosService.obtenerProyectoPorFiltro(tags);
    });
  }

  onProyectClick(proyect: proyect): void {
    this.proyectosService.setCurrentProyect(proyect);
  }

  filtro = () => {
    let filtroTags: tags[] = [];

    for (const tagName in this.tagsState) {
      if (this.tagsState[tagName]) {
        filtroTags.push(tags[tagName]);
      }
    }

    this.filterService.updateFilter(filtroTags);
  };

}
