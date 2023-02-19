import { Component, HostBinding, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  producto: Producto = {
    codigo: 0,
    nombre: '',
    precio: {},
    cantidad: 0,
    descripcion: '',
    imagen: '',
    fecha: new Date()
  };

  edit: boolean = false;

  constructor(private productoService: ProductoService, private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['codigo']) {
      this.productoService.getProducto(params['codigo']).subscribe(
        res => {
          console.log(res); //Muestra en consola
          this.producto = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        err => console.error(err)
      );
    }
  }

  addProducto(){
    delete this.producto.codigo;
    delete this.producto.fecha;
    //console.log(this.producto); Manda los datos en Consola
    this.productoService.createProducto(this.producto).subscribe(
      res => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['productos']);
      },
      err => console.error(err)
    );
  }

  actualizaProducto(){
    delete this.producto.fecha;
    const params = this.activatedRoute.snapshot.params;
    this.productoService.updateProducto(params['codigo'], this.producto).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.error(err)
    );
  }
}
