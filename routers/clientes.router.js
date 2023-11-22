import express from 'express'
import controller from '../controllers/clientes.controller.js'

const routerClientes = express.Router()

routerClientes.post('/', controller.guardarClientes)

export default routerClientes