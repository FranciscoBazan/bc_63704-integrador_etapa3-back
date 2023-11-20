import { body } from "express-validator";
import carritoMiddleware from "../middlewares/carritos.middleware.js";


const carritoPostValidator = [
    body()
        .isArray()
        .notEmpty()
        .withMessage('El carrito no puede estar vacío')
        .withMessage('La información enviada es incorrecta'),
    carritoMiddleware
]

export default {
    carritoPostValidator
}