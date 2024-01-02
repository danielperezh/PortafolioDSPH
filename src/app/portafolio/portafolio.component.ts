import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { proyect } from '../models/proyect';
import { tags } from '../models/tags';
import { ProyectsService } from '../services/proyects.service';
import  Isotope  from 'isotope-layout';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit, AfterViewInit{

  proyects = {} as proyect[];

  isCollapsed: boolean = true;

  angular: boolean = false;
  java: boolean = false;
  Html: boolean = false;
  css: boolean = false;
  TypeScript: boolean = false;
  JavaScript : boolean = false;
  Csharp : boolean = false;
  Bootstrap : boolean = false;
  Net  : boolean = false;
  ASPNET  : boolean = false;
  AndroidStudio : boolean = false;
  SQLServer : boolean = false;
  PostgreSQL : boolean = false;
  Jupyter : boolean = false;
  node  : boolean = false;

  @Input() proyect = {} as proyect;

  private isotope: Isotope | undefined;

  constructor(private proyectosService: ProyectsService){

  }

  ngOnInit(): void {
    this.proyects = this.proyectosService.obtenerProyectos();
  }

  ngAfterViewInit(): void {
    this.initIsotope();
  }

  onProyectClick(proyect: proyect): void {
    this.proyectosService.setCurrentProyect(proyect);
  }

  filtro(){
    let filtroTags: tags[] = [];

    if(this.angular){
      filtroTags.push(tags.angular);
    }
    if(this.java){
      filtroTags.push(tags.java);
    }
    if(this.Html){
      filtroTags.push(tags.Html);
    }
    if(this.css){
      filtroTags.push(tags.css);
    }
    if(this.TypeScript){
      filtroTags.push(tags.TypeScript);
    }
    if(this.JavaScript){
      filtroTags.push(tags.JavaScript);
    }
    if(this.Csharp){
      filtroTags.push(tags.Csharp);
    }
    if(this.Bootstrap){
      filtroTags.push(tags.Bootstrap);
    }
    if(this.Net){
      filtroTags.push(tags.Net);
    }
    if(this.ASPNET){
      filtroTags.push(tags.ASPNET);
    }
    if(this.AndroidStudio){
      filtroTags.push(tags.AndroidStudio);
    }
    if(this.AndroidStudio){
      filtroTags.push(tags.AndroidStudio);
    }
    if(this.SQLServer){
      filtroTags.push(tags.SQLServer);
    }
    if(this.PostgreSQL){
      filtroTags.push(tags.PostgreSQL);
    }
    if(this.Jupyter){
      filtroTags.push(tags.Jupyter);
    }
    if(this.node){
      filtroTags.push(tags.node);
    }

    this.proyects = this.proyectosService.obtenerProyectoPorFiltro(filtroTags);

    if (this.isotope) {
      this.isotope.reloadItems();
      this.isotope.arrange({});
    }
  }

  initIsotope() {
    const portfolioContainer = document.getElementById('portfolio-container');

    if (portfolioContainer) {
      const isotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry', // or 'masonry' based on your preferences
      });
    } else {
      console.error('Portfolio container not found');
    }
  }


}
