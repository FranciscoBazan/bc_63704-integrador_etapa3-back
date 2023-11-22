import mongoose from "mongoose";

const clientesSchema = mongoose.Schema(
    {
        motivo: String,
        nombre: String,
        mail: String,
        telefono: Number,
        comentarios: String
    }
)

const ClientesModel = mongoose.model('clientes', clientesSchema)

const guardarCliente = async (clienteNuevo) => {
    try {
        const clienteCreado = new ClientesModel(clienteNuevo)
        await clienteCreado.save()
    } catch (error) {
        console.log('[guardarCliente]: No se pudo guardar el cliente en la DB', error)
    }
}

export default {
    guardarCliente
}