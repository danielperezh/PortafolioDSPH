import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit{

  educationData: any;
  experienciaData: any;

  constructor(public cv: ServicioService) { }

  ngOnInit(): void {
    this.cv.getEducationData().subscribe(data => {
      this.educationData = data;
    });

    this.cv.getExperienciaData().subscribe(data => {
      this.experienciaData = data;
    });
  }

}
