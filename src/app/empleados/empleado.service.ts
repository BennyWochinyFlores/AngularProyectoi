import { Injectable } from '@angular/core';
import { empleados } from './empleados';
import { EMPLEADO } from './empleados.json';
import {Observable , of } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlEndPoint: string='http://localhost:8090/api/empleados';
  constructor( private http:HttpClient) { }

  //Listar
  getEmpleado(): Observable<empleados[]>{
    return this.http.get<empleados[]>(this.urlEndPoint);
  }

  //Crear
  create(empleados:empleados): Observable<empleados>{
    return this.http.post<empleados>(this.urlEndPoint, empleados);
  }

  //Buscar
  get(id: number):Observable<empleados>{
    return this.http.get<empleados>(this.urlEndPoint +'/'+ id);
  }

  //Modificar
  update(empleados:empleados): Observable<empleados>{
    return this.http.put<empleados>(this.urlEndPoint , empleados);
  }

  //Eliminar
  delete(id: number): Observable<empleados>{
    return this.http.delete<empleados>(this.urlEndPoint + '/'+ id)
  }


}
