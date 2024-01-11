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
    { id: 0, name: 'Sistema Ventas', summary: "", decription: "El sistema de ventas es un completo y robusto dashboard de desarrollo diseñado para optimizar y simplificar la gestión integral de ventas en un entorno empresarial. Desarrollado con tecnologías de vanguardia, este sistema ofrece una solución eficiente para la administración de productos, usuarios, ventas y generación de reportes.", proyectLinkCodigo: "", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/dashboard.webp"], pictures: ["assets/images/portfolio/masonry/loginc.webp","assets/images/portfolio/masonry/dashboard.webp","assets/images/portfolio/masonry/listas.webp","assets/images/portfolio/masonry/modals.webp"], tags: [tags.angular, tags.Csharp, tags.Html,tags.Bootstrap,tags.ASPNET,tags.Net,tags.css,tags.SQLServer]},
    { id: 1, name: 'MOVIES WEB', summary: "", decription: "Esta página web, desarrollada con Angular y Bootstrap, proporciona a los usuarios una experiencia cinematográfica completa al integrar la API de TMDB. Con un sistema de autenticación, guards para la seguridad de las rutas, mensajes de alerta personalizados y modales interactivos, la plataforma ofrece una exploración fluida y segura. La eficiente modulación del código y el uso de servicios Angular para la comunicación con la API garantizan una estructura organizada y un rendimiento óptimo.", proyectLinkCodigo: "https://github.com/danielperezh/movies", proyectLinkDemo: "https://danielperezh.github.io/movies/iniciar-sesion", mainImage: ["assets/images/portfolio/masonry/movies.webp"], pictures: ["assets/images/portfolio/masonry/movies.webp","assets/images/portfolio/masonry/loginm.webp","assets/images/portfolio/masonry/home.webp","assets/images/portfolio/masonry/details.webp"], tags: [tags.angular, tags.node, tags.Html, tags.css, tags.TypeScript,tags.Bootstrap] },
    { id: 2, name: 'PNATAPP', summary: "", decription: "PNATAPP es una aplicación móvil especializada en el registro de avistamientos de tiburones y mantarrayas, con un enfoque integral en el diseño y desarrollo front-end. Lideré el proceso desde la recolección y análisis de requerimientos hasta la implementación final, abordando diversas necesidades y expectativas de los usuarios. Aplicando patrones de arquitectura como MVC, utilicé Kotlin y sus últimas funcionalidades para crear una interfaz de usuario moderna y ágil, priorizando el rendimiento óptimo de la aplicación. El diseño incluyó formularios de entrada de datos validados y campos personalizados para capturar detalles específicos de cada avistamiento, ofreciendo así una experiencia completa y eficiente para los usuarios dedicados a la observación marina.", proyectLinkCodigo: "https://github.com/danielperezh/PnatApp/tree/master", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/Frame 3.webp"], pictures: ["assets/images/portfolio/masonry/Frame 3.webp"], tags: [ tags.java,tags.AndroidStudio, tags.Html] },
    { id: 3, name: 'DOG FACE', summary: "", decription: "Este proyecto se enfoca en la implementación del reconocimiento de hasta cinco razas de perros a través del entrenamiento de Machine Learning utilizando la plataforma Lobe. Desarrollé una aplicación Android que aprovecha las capacidades avanzadas de este modelo de aprendizaje automático para lograr un reconocimiento efectivo y preciso. La app proporciona una experiencia intuitiva y accesible, permitiendo a los usuarios identificar fácilmente las razas de perros mediante la interfaz de usuario de Android.", proyectLinkCodigo: "https://github.com/danielperezh/Machine_learning/tree/master", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/lobe.webp"], pictures: ["assets/images/portfolio/masonry/lobe.webp"], tags: [tags.AndroidStudio, tags.java, tags.Jupyter] },
    { id: 4, name: 'CITY SKYLINE', summary: "", decription: "CITY SKYLINE es un proyecto cautivador que da vida a una ciudad virtual ofreciendo una experiencia única tanto de día como de noche. Desarrollado con HTML, CSS y JavaScript. Este proyecto es un testimonio de la versatilidad y el potencial creativo de HTML, CSS y JavaScript en la creación de experiencias interactivas y visualmente impactantes.", proyectLinkCodigo: "https://github.com/danielperezh/Ciudad", proyectLinkDemo: "https://danielperezh.github.io/Ciudad/", mainImage: ["assets/images/portfolio/masonry/cuidad.webp"], pictures: ["assets/images/portfolio/masonry/cuidad.webp"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 5, name: 'CRUD CARROS', summary: "", decription: "Este proyecto se centra en el desarrollo de un sistema CRUD para gestionar una lista de carros, proporcionando funcionalidades clave para la administración eficiente de la información. Desarrollada en Angular, la aplicación permite agregar nuevos vehículos, actualizar detalles existentes y eliminar aquellos que ya no estén disponibles.", proyectLinkCodigo: "https://github.com/danielperezh/Crud", proyectLinkDemo: "https://danielperezh.github.io/Crud/", mainImage: ["assets/images/portfolio/masonry/crud.webp"], pictures: ["assets/images/portfolio/masonry/crud.webp"], tags: [tags.angular, tags.Html, tags.css, tags.TypeScript,tags.Bootstrap] },
    { id: 6, name: 'PLAY MEMORY', summary: "", decription: "Este proyecto representa el desarrollo de un emocionante juego de memoria diseñado para consolidar y fortalecer conocimientos en JavaScript, HTML y CSS. El juego desafía la capacidad de recordar las ubicaciones de las piezas y buscar sus parejas correspondientes en el tablero.", proyectLinkCodigo: "https://github.com/danielperezh/JuegoDeMemoria", proyectLinkDemo: "https://danielperezh.github.io/JuegoDeMemoria/", mainImage: ["assets/images/portfolio/masonry/JuegoMemory.webp"], pictures: ["assets/images/portfolio/masonry/JuegoMemory.webp"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 7, name: 'PAGE FOOD', summary: "", decription: "Esta página web de comidas rápidas, desarrollada con JavaScript, CSS y HTML, ofrece una experiencia culinaria digitalmente atractiva y funcional. La interfaz amigable presenta un diseño intuitivo que facilita la exploración del menú de delicias rápidas.", proyectLinkCodigo: "https://github.com/danielperezh/Page-Food", proyectLinkDemo: "https://danielperezh.github.io/Page-Food/", mainImage: ["assets/images/portfolio/masonry/food.webp"], pictures: ["assets/images/portfolio/masonry/food.webp"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 8, name: 'NOTES', summary: "", decription: "Este proyecto se centra en el desarrollo de un sistema de notas pop-up utilizando las tecnologías fundamentales de la web: HTML, CSS y JavaScript. La interfaz amigable permite a los usuarios crear, visualizar y gestionar sus notas de manera intuitiva.", proyectLinkCodigo: "https://github.com/danielperezh/AppNotes", proyectLinkDemo: "https://danielperezh.github.io/AppNotes/", mainImage: ["assets/images/portfolio/masonry/Notes.webp"], pictures: ["assets/images/portfolio/masonry/Notes.webp"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 9, name: 'ALL LIST', summary: "", decription: "All List es una aplicación versátil desarrollada con HTML, CSS y JavaScript que ofrece una solución integral para la organización y gestión de listas. Esta aplicación intuitiva permite a los usuarios crear, editar y personalizar listas de tareas.", proyectLinkCodigo: "https://github.com/danielperezh/AllList", proyectLinkDemo: "https://danielperezh.github.io/AllList/", mainImage: ["assets/images/portfolio/masonry/AllList.webp"], pictures: ["assets/images/portfolio/masonry/AllList.webp"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 10, name: 'MAGAZINE', summary: "", decription: "El proyecto consiste en el desarrollo de una página web con un diseño inspirado en las revistas de estilo de vida y entretenimiento.", proyectLinkCodigo: "https://github.com/danielperezh/Page-media", proyectLinkDemo: "https://danielperezh.github.io/Page-media/", mainImage: ["assets/images/portfolio/masonry/page.webp"], pictures: ["assets/images/portfolio/masonry/page.webp"], tags: [tags.JavaScript, tags.css, tags.Html] },
    { id: 11, name: 'FULL NOTES', summary: "", decription: "Este proyecto se centra en el desarrollo de un sistema de notas pop-up utilizando las tecnologías fundamentales de la web: HTML, CSS y JavaScript. La interfaz amigable permite a los usuarios crear, visualizar y gestionar sus notas de manera intuitiva.", proyectLinkCodigo: "https://github.com/danielperezh/Notes-Taking-App", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/Notes2.0.webp"], pictures: ["assets/images/portfolio/masonry/Notes2.0.webp"], tags: [tags.JavaScript, tags.css, tags.Html]},
    { id: 12, name: 'Api Sistema de ventas', summary: "", decription: "Este proyecto se centra en el desarrollo de una API robusta y eficiente para un Sistema de Ventas, brindando una sólida base para la gestión integral de transacciones comerciales. Desarrollada con tecnologías clave como ASP.NET Core y SQL Server, la API permite funciones esenciales como la creación de nuevos usuarios con roles definidos, la gestión de productos, la generación de informes y la realización de ventas con su respectivo historial detallado.", proyectLinkCodigo: "https://github.com/danielperezh/Api-Sistema-Ventas", proyectLinkDemo: "", mainImage: ["assets/images/portfolio/masonry/apisis.webp"], pictures: ["assets/images/portfolio/masonry/apisis.webp"], tags: [tags.Csharp, tags.ASPNET, tags.SQLServer]}
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

  obtenerProyectoPorFiltro(filtroTags: tags[]){
    let filtroProyectos: proyect[] = [];

    this.proyects.forEach(function (proyect) {
      let encontrarTodo = true;

      filtroTags.forEach(function (filtroTag) {
        if(proyect.tags.includes(filtroTag) == false) {
          encontrarTodo = false;
        }
      });

      if(encontrarTodo){
        filtroProyectos.push(proyect);
      }
    });
    return filtroProyectos;
  }

  // obtenerProyectoPorFiltro(filtroTags: tags[]): proyect[] {
  //   return this.proyects.filter(proyect =>
  //     filtroTags.every(filtroTag => proyect.tags.includes(filtroTag))
  //   );
  // }

}
