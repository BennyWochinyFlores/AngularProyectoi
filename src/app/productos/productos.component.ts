import { Component, OnInit } from '@angular/core';
import { productos } from './productos';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {



 productos : productos[] = [];
  constructor(private productoService:ProductosService){}
  ngOnInit(): void {
   this.productoService.getEmpleado().subscribe(
    (productos)=>{this.productos=productos}
   );
  }

}
