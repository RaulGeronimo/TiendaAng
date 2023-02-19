import { Request, Response } from "express";

class IndexController{
    public index(req: Request, res: Response){
        res.json({text: 'Puedes acceder a /app/productos'});
    }
}

export const indexController = new IndexController();