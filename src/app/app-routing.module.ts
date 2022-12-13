import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactosComponent } from "./contactos/contactos.component";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { FormComponent } from "./empleados/empleados/form.component";
import { LoginComponent } from "./login/login.component";
import { ProductosComponent } from "./productos/productos.component";
import { ProveedorComponent } from "./proveedor/proveedor.component";


//Aqui se definen las rutas de navegacion
const routes :Routes=[
    {path:'',redirectTo:'/inicio',pathMatch:'full'},
    {path:'empleados',component:EmpleadosComponent},
    {path:'empleados/form',component:FormComponent},
    {path:'productos', component:ProductosComponent},
    {path:'proveedor', component:ProveedorComponent},
    {path:'contactos', component:ContactosComponent},
    {path:'login', component:LoginComponent}
  
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
