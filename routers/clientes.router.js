import express from 'express'
import controller from '../controllers/clientes.controller.js'
import validator from '../validators/clientes.validator.js'

const routerClientes = express.Router()

routerClientes.post('/', validator.clientesValidator, controller.guardarClientes)

export default routerClientes