import { Injectable } from '@angular/core';
import {Observable , of } from 'rxjs';
import { productos } from './productos';
import { PRODUCTOS } from './productos.json';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }
  getEmpleado(): Observable<productos[]>{
    return of(PRODUCTOS);
}
}