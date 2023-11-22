import models from '../models/clientes.model.js'

const guardarClientes = async (req, res) => {
    const cliente = req.body

    try {
        const clienteGuardado = await models.guardarCliente(cliente)
        res.status(201).json(clienteGuardado)
    } catch (error) {
        res.status(500).send('[guardarCliente]: No se puedo guardar el cliente', error)
    }
}

export default {
    guardarClientes
}