"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductoController {
    lista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT * FROM Producto');
            res.json(producto);
        });
    }
    crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body); Mostrar en consola
            yield database_1.default.query('INSERT INTO Producto SET ?', [req.body]);
            res.json({ message: 'Se guardo un producto' });
        });
    }
    actualiza(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('UPDATE Producto SET ? WHERE codigo = ?', [req.body, codigo]);
            res.json({ message: 'Se modifico el producto' });
        });
    }
    borrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            yield database_1.default.query('DELETE FROM Producto WHERE codigo = ?', [codigo]);
            res.json({ message: 'Se elimino el producto' });
        });
    }
    buscar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo } = req.params;
            const producto = yield database_1.default.query('SELECT * FROM Producto WHERE codigo = ?', [codigo]);
            if (producto.length > 0) {
                return res.json(producto[0]);
            }
            res.status(404).json({ message: 'No existe el producto' });
        });
    }
}
const productoController = new ProductoController(); //Devuelve un objeto
exports.default = productoController; //Importacion de la instancia
