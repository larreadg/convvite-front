import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http: HttpClient) { }

  getProyectos = ():Observable<any> => {
    return this.http.get<any>('assets/json/proyectos.json');
  }
  
  getQueIncluye = ():Observable<any> => {
    return this.http.get<any>('assets/json/que-incluye.json');
  }
  
  getExtras = ():Observable<any> => {
    return this.http.get<any>('assets/json/extras.json');
  }
  
  getCaracteristicas   = ():Observable<any> => {
    return this.http.get<any>('assets/json/caracteristicas.json');
  }

}
