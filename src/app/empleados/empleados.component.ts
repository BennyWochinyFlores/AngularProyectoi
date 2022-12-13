import { Component, OnInit } from '@angular/core';
import { ObservableInput } from 'rxjs';
import { empleados } from './empleados';
import { EmpleadoService } from './empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent  implements OnInit{
 
  empleados = null as any;
  
  constructor(private empleadoService:EmpleadoService){}
  ngOnInit(): void {
   this.empleadoService.getEmpleado().subscribe(
    (empleados)=>{this.empleados=empleados}
   );
  }
  //EliminarEmpleado

  delete(empleado:empleados):void {
    console.log("Eliminamos un Empleado");

    this.empleadoService.delete(empleado.id).subscribe(
      res => this.empleadoService.getEmpleado().subscribe(
        response => this.empleados = response
      )
    );

  }

}
