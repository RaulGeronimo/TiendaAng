import { Component, HostBinding, OnInit } from '@angular/core';
//Importar el archivo de Producto.service.ts
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado productos
  productos: any = [];

  constructor(private productoServide: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos(){
    this.productoServide.getProductos().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.productos = res;
      },
      err => console.error(err)
    );
  }

  borrarProducto(codigo: string){
    this.productoServide.deleteProducto(codigo).subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerProductos();
      },
      err => console.error(err)
    );
  }

}
