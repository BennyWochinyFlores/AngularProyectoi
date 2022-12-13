import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoService } from './empleados/empleado.service';
import { RouterModule,Routes } from '@angular/router';
import { CabezeraComponent } from "./cabezera/cabezera.component";
import { ProductosService } from './productos/productos.service';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './empleados/empleados/form.component';
import { FormsModule } from '@angular/forms';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path:'',redirectTo:'/empleados',pathMatch:'full'},
  {path:'empleados',component:EmpleadosComponent},
  {path:'empleados/form',component:FormComponent},
  {path:'proveedores',component:ProveedorComponent},
  {path:'contactos',component:ContactosComponent},
  {path:'productos', component:ProductosComponent},
  {path:'login', component:LoginComponent},


];


@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        ProductosComponent,
        EmpleadosComponent,
        CabezeraComponent,
        FormComponent,
        ProveedorComponent,
        ContactosComponent,
        LoginComponent
    ],
    providers: [EmpleadoService,ProductosService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),
        
    ]
})
export class AppModule { }
