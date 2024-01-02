import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { proyect } from '../models/proyect';
import { ProyectsService } from '../services/proyects.service';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.css']
})
export class ProyectoModalComponent {

  proJect = {} as proyect;

  constructor(public bsModalRef: BsModalRef,private proyectoServicio: ProyectsService){}


}
