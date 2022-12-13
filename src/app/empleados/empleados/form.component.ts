import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { empleados } from '../empleados';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  public empleados:empleados= new empleados()
  constructor(private router: Router,private empleadoService:EmpleadoService ,private activatedrouter: ActivatedRoute){}
  ngOnInit(): void {
    this.cargar();
  
  }

   cargar():void{
    this.activatedrouter.params.subscribe(
      e => {
        let id = e ['id'];
        if (id){
          this.empleadoService.get(id).subscribe(
            es => this.empleados =es
          );
        }
      }
    )
  }

  //NuevoEmpleado
  create(): void{
    console.log("Creacion de Registro de Empleados");
    console.log(this.empleados);

    this.empleadoService.create(this.empleados).subscribe(
      res => this.router.navigate(['/empleados'])
    )
  }
  //ActualizarEmpleado
  update():void{
    console.log("Modificacion del Registro Empleado");
    console.log(this.empleados);

    this.empleadoService.update(this.empleados).subscribe(
      res=> this.router.navigate(['/empleados'])
    );
  }

}
