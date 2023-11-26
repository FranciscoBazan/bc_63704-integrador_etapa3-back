import { check } from "express-validator";
import clientesMiddleware from "../middlewares/clientes.middleware.js";


const clientesValidator = [
    check('motivo')
        .not().isEmpty().withMessage('Motivo es necesario'),
    check('nombre')
        .not().isEmpty().withMessage('El nombre es necesario')
        .trim(),
    check('mail')
        .not().isEmpty().withMessage('El email es necesario')
        .isEmail().withMessage('La información enviada no es un email válido')
        .trim(),
    check('telefono')
        .not().isEmpty().withMessage('El teléfono es necesario')
        .isNumeric().withMessage('El teléfono debe ser un número')
        .isLength( { min: 10 } ).withMessage('El teléfono debe tener al menos 10 números')
        .trim(),
    check('comentarios')
        .optional()
        .isLength( { max: 700 } ).withMessage('Los comentarios no pueden superar los 700 caracteres')
        .trim(),
    clientesMiddleware
]

export default {
    clientesValidator
}