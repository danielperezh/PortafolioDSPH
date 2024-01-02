import { Injectable } from '@angular/core';
import { proyect } from '../models/proyect';
import { tags } from '../models/tags';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  private currentProyectSubject = new BehaviorSubject<proyect | null>(null);
  currentProyect$ = this.currentProyectSubject.asObservable();

  proyects: proyect[] = [
    { id: 0, name: 'prueba', summary: "", decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi voluptate doloremque praesentium ab numquam quod unde maxime quos temporibus, nostrum quasi velit sunt, corrupti eligendi maiores dicta, enim eveniet.", proyectLinkCodigo: "", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/cuidad.png"], pictures: ["assets/images/portfolio/masonry/cuidad.png","assets/images/portfolio/masonry/Frame 3.png","assets/images/portfolio/masonry/food.png"], tags: [tags.angular, tags.java, tags.Html] },
    { id: 1, name: 'MOVIES WEB', summary: "", decription: "Este proyecto web es una página que muestra una lista de películas obtenidas del API de TMDB, con un sistema de login y una ventana de detalle movie.", proyectLinkCodigo: "https://github.com/danielperezh/movies", proyectLinkDemo: "https://danielperezh.github.io/movies/iniciar-sesion", mainImage: ["assets/images/portfolio/masonry/movies.png"], pictures: ["assets/images/portfolio/masonry/movies.png"], tags: [tags.angular, tags.node, tags.Html, tags.css, tags.TypeScript] },
    { id: 2, name: 'PNATAPP', summary: "", decription: "Diseño y desarrollo Front-end de aplicativo móvil para llevar el registro de avistamientos de tiburones y mantarrayas.", proyectLinkCodigo: "https://github.com/danielperezh/PnatApp/tree/master", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/Frame 3.png"], pictures: ["assets/images/portfolio/masonry/Frame 3.png"], tags: [tags.AndroidStudio, tags.java, tags.Html] },
    { id: 3, name: 'DOG FACE', summary: "", decription: "Mediante el uso del entrenamiento de Machine Learning con Lobe, se desarrolló una app en Android para el reconocimiento de hasta cinco razas de perros de manera efectiva.", proyectLinkCodigo: "https://github.com/danielperezh/Machine_learning/tree/master", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/lobe.png"], pictures: ["assets/images/portfolio/masonry/lobe.png"], tags: [tags.AndroidStudio, tags.java, tags.Jupyter] },
    { id: 4, name: 'CITY SKYLINE', summary: "", decription: "El proyecto consiste en la creación de una ciudad que ofrezca una experiencia única tanto de día como de noche.", proyectLinkCodigo: "https://github.com/danielperezh/Ciudad", proyectLinkDemo: "https://danielperezh.github.io/Ciudad/", mainImage: ["assets/images/portfolio/masonry/cuidad.png"], pictures: ["assets/images/portfolio/masonry/cuidad.png"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 5, name: 'CRUD CARROS', summary: "", decription: "Proyecto CRUD de una lista de carros, se utiliza en este tipo de aplicaciones permitiendo agregar nuevos vehículos a la lista, actualizar información existente sobre los coches y eliminar aquellos que ya no estén disponibles.", proyectLinkCodigo: "https://github.com/danielperezh/Crud", proyectLinkDemo: "https://danielperezh.github.io/Crud/", mainImage: ["assets/images/portfolio/masonry/crud.png"], pictures: ["assets/images/portfolio/masonry/crud.png"], tags: [tags.angular, tags.Html, tags.css, tags.TypeScript] },
    { id: 6, name: 'PLAY MEMORY', summary: "", decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi voluptate doloremque praesentium ab numquam quod unde maxime quos temporibus, nostrum quasi velit sunt, corrupti eligendi maiores dicta, enim eveniet.", proyectLinkCodigo: "https://github.com/danielperezh/JuegoDeMemoria", proyectLinkDemo: "https://danielperezh.github.io/JuegoDeMemoria/", mainImage: ["assets/images/portfolio/masonry/JuegoMemory.png"], pictures: ["assets/images/portfolio/masonry/JuegoMemory.png"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 7, name: 'PAGE FOOD', summary: "", decription: "", proyectLinkCodigo: "https://github.com/danielperezh/Page-Food", proyectLinkDemo: "https://danielperezh.github.io/Page-Food/", mainImage: ["assets/images/portfolio/masonry/food.png"], pictures: ["assets/images/portfolio/masonry/food.png"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 8, name: 'NOTES', summary: "", decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi voluptate doloremque praesentium ab numquam quod unde maxime quos temporibus, nostrum quasi velit sunt, corrupti eligendi maiores dicta, enim eveniet.", proyectLinkCodigo: "https://github.com/danielperezh/AppNotes", proyectLinkDemo: "https://danielperezh.github.io/AppNotes/", mainImage: ["assets/images/portfolio/masonry/Notes.png"], pictures: ["assets/images/portfolio/masonry/Notes.png"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 9, name: 'ALL LIST', summary: "", decription: "", proyectLinkCodigo: "https://github.com/danielperezh/AllList", proyectLinkDemo: "https://danielperezh.github.io/AllList/", mainImage: ["assets/images/portfolio/masonry/AllList.png"], pictures: ["assets/images/portfolio/masonry/AllList.png"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 10, name: 'MAGAZINE', summary: "", decription: "El proyecto consiste en el desarrollo de una página web con un diseño inspirado en las revistas de estilo de vida y entretenimiento.", proyectLinkCodigo: "https://github.com/danielperezh/Page-media", proyectLinkDemo: "https://danielperezh.github.io/Page-media/", mainImage: ["assets/images/portfolio/masonry/page.png"], pictures: ["assets/images/portfolio/masonry/page.png"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 11, name: 'FULL NOTES', summary: "", decription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi voluptate doloremque praesentium ab numquam quod unde maxime quos temporibus, nostrum quasi velit sunt, corrupti eligendi maiores dicta, enim eveniet.", proyectLinkCodigo: "", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/Notes2.0.png"], pictures: ["assets/images/portfolio/masonry/Notes2.0.png"], tags: [tags.JavaScript, tags.css, tags.Html] }
  ];

  constructor() { }

  obtenerProyectos() {
    return this.proyects;
  }

  obtenerProyectosPorId(id: number): proyect {
    let proyect = this.proyects.find(proyect => proyect.id === id);
    if (proyect === undefined) {
      throw new TypeError("No se encontraron coincidencias con el id del proyecto: " + id);
    }
    return proyect;
  }

  setCurrentProyect(proyect: proyect): void {
    this.currentProyectSubject.next(proyect);
  }

  // obtenerProyectoPorFiltro(filtroTags: tags[]){
  //   let filtroProyectos: proyect[] = [];

  //   this.proyects.forEach(function (proyect) {
  //     let encontrarTodo = true;

  //     filtroTags.forEach(function (filtroTag) {
  //       if(proyect.tags.includes(filtroTag) == false) {
  //         encontrarTodo = false;
  //       }
  //     });

  //     if(encontrarTodo){
  //       filtroProyectos.push(proyect);
  //     }
  //   });
  //   return filtroProyectos;
  // }

  obtenerProyectoPorFiltro(filtroTags: tags[]): proyect[] {
    return this.proyects.filter(proyect =>
      filtroTags.every(filtroTag => proyect.tags.includes(filtroTag))
    );
  }

}
