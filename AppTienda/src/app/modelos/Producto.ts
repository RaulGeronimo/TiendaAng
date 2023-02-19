//Se crea una interfaz
export interface Producto{
    codigo?: number;
    nombre?: string;
    precio?: DoubleRange;
    cantidad?: number;
    descripcion?: string;
    imagen?: string;
    fecha?: Date; 
}