import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tags } from '../interface/tags';
import { tags } from '../models/tags';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrlEducacion = 'https://portafolio-fc29d-default-rtdb.firebaseio.com/educacion.json';
  private apiUrlExperiencia = 'https://portafolio-fc29d-default-rtdb.firebaseio.com/experiencia.json';


  constructor(private http: HttpClient) {

  }

  getEducationData(): Observable<any> {
    return this.http.get<any>(this.apiUrlEducacion);
  }

  getExperienciaData(): Observable<any> {
    return this.http.get<any>(this.apiUrlExperiencia);
  }

  private filterSubject = new BehaviorSubject<tags[]>([]);
  filter$ = this.filterSubject.asObservable();

  updateFilter(tags: tags[]) {
    this.filterSubject.next(tags);
  }

}
