import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Importamos el modulo de http
import { HttpClientModule } from '@angular/common/http';
//Importamos el modulo de FormModule que va enlazar los input
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { ProductoFormComponent } from './componentes/producto-form/producto-form.component';
import { ProductoListComponent } from './componentes/producto-list/producto-list.component';

import { ProductoService } from './servicios/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductoFormComponent,
    ProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
