import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Producto } from '../modelos/Producto'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }

  getProducto(codigo: string){
    return this.http.get(`${this.API_URI}/productos/${codigo}`);
  }

  createProducto(producto: Producto){
    return this.http.post(`${this.API_URI}/productos`, producto);
  }

  deleteProducto(codigo: string){
    return this.http.delete(`${this.API_URI}/productos/${codigo}`);
  }

  updateProducto(codigo: string, updateProducto: Producto): Observable<Producto>{
    return this.http.put(`${this.API_URI}/productos/${codigo}`, updateProducto);
  }
}
