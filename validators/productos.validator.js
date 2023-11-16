import { check } from 'express-validator'
import productoMiddleware from '../middlewares/productos.middleware.js'

const productoDeleteValidator = [
    // Tengo que tener un array de Middleware
    check('id')
        .isMongoId()
        .withMessage('Envío información incorrecta para el borrado producto'),
    productoMiddleware
]

const productoCreateValidator = [
    // Tengo que tener un array de Middleware
    check('nombre')
        .notEmpty()
        .trim()
        .withMessage('El nombre es requerido'),
    check('categoria')
        .notEmpty()
        .trim()
        .withMessage('La categoria es requerida'),
    check('precio')
        .notEmpty()
        .withMessage('El precio es requerido')
        .isNumeric()
        .withMessage('El precio debe ser un número')
        .trim(),
    check('stock')
        .notEmpty()
        .withMessage('El stock es requerido')
        .isNumeric()
        .withMessage('El stock debe ser un número')
        .trim(),
    check('marca')
        .notEmpty()
        .trim()
        .withMessage('La marca es requerida'),
    check('detalles')
        .notEmpty()
        .withMessage('Los detalles son requeridos')
        .isLength( {min: 10} )
        .withMessage('Los detalles deben tener mímino 10 caracteres')
        .trim(),
    check('foto')
        .notEmpty()
        .trim()
        .withMessage('La foto es requerida'),
    check('envio')
        .notEmpty()
        .isBoolean()
        .withMessage('La información enviada es inválida'),
    productoMiddleware
]

const productoUpdateValidator = [
    check('id')
        .isMongoId()
        .withMessage('Envío de id inválido'),
    check('nombre')
        .notEmpty()
        .trim()
        .withMessage('El nombre es requerido'),
    check('categoria')
        .notEmpty()
        .trim()
        .withMessage('La categoria es requerida'),
    check('precio')
        .notEmpty()
        .withMessage('El precio es requerido')
        .isNumeric()
        .withMessage('El precio debe ser un número')
        .trim(),
    check('stock')
        .notEmpty()
        .withMessage('El stock es requerido')
        .isNumeric()
        .withMessage('El stock debe ser un número')
        .trim(),
    check('marca')
        .notEmpty()
        .trim()
        .withMessage('La marca es requerida'),
    check('detalles')
        .notEmpty()
        .withMessage('Los detalles son requeridos')
        .isLength( {min: 10} )
        .withMessage('Los detalles deben tener mímino 10 caracteres')
        .trim(),
    check('foto')
        .notEmpty()
        .trim()
        .withMessage('La foto es requerida'),
    check('envio')
        .notEmpty()
        .isBoolean()
        .withMessage('La información enviada es inválida'),
    productoMiddleware
]

const productoReadOneValidator = [
    check('id')
        .optional()
        .isMongoId()
        .withMessage('El id o información enviada no es válido'),
    productoMiddleware
]

export default {
    productoDeleteValidator,
    productoCreateValidator,
    productoUpdateValidator,
    productoReadOneValidator
}