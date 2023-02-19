import { NgModule } from '@angular/core';
//Importacion que permite definir las rutas de la app
import { RouterModule, Routes } from '@angular/router';
//Importamos el archivo que viene en la ruta sig.
import { ProductoListComponent } from './componentes/producto-list/producto-list.component';
//Importamos la clase de form.component
import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';

const routes: Routes = [
  //Creamos objetos
  //Muestra lo que esta en el archivo Producto-List.Component.html
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'productos', //Se creo la ruta para abrir un componente
    component: ProductoListComponent
  },
  {
    path: 'productos/agregar', //Se crea la ruta para abrir el componente del formulario
    component: ProductoFormComponent
  },
  {
    path: 'productos/actualizar/:codigo', //Ruta para Actualizar
    component: ProductoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
