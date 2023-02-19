import { Request, Response } from "express";

import pool from '../database';

class ProductoController{
    public async lista(req: Request, res: Response){
        const producto = await pool.query('SELECT * FROM Producto');
        res.json(producto);
    }

    public async crear(req: Request, res: Response){
        //console.log(req.body); Mostrar en consola
        await pool.query('INSERT INTO Producto SET ?', [req.body]);
        res.json({message: 'Se guardo un producto'});
    }

    public async actualiza(req: Request, res: Response){
        const { codigo } = req.params;
        await pool.query('UPDATE Producto SET ? WHERE codigo = ?', [req.body, codigo]);
        res.json({message: 'Se modifico el producto'});
    }

    public async borrar(req: Request, res: Response){
        const { codigo } = req.params;
        await pool.query('DELETE FROM Producto WHERE codigo = ?', [codigo]);
        res.json({message: 'Se elimino el producto'});
    }

    public async buscar(req: Request, res: Response){
        const { codigo } = req.params;
        const producto = await pool.query('SELECT * FROM Producto WHERE codigo = ?', [codigo]);
        if(producto.length > 0){
            return res.json(producto[0]);
        }
        res.status(404).json({message: 'No existe el producto'})
    }
}


const productoController = new ProductoController(); //Devuelve un objeto
export default productoController; //Importacion de la instancia