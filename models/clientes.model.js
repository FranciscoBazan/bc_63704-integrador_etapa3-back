import mongoose from "mongoose";
import handleMongoId from "../utils/handleMongoId.js";

const clientesSchema = mongoose.Schema(
    {
        motivo: String,
        nombre: String,
        mail: String,
        telefono: Number,
        comentarios: String
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const ClientesModel = mongoose.model('clientes', clientesSchema)

const guardarCliente = async (clienteNuevo) => {
    try {
        const clienteCreado = new ClientesModel(clienteNuevo)
        await clienteCreado.save()
        return clienteCreado
    } catch (error) {
        console.log('[guardarCliente]: No se pudo guardar el cliente en la DB', error)
    }
}

export default {
    guardarCliente
}