
const carritosMiddleware = (req, res, next) => {
    if (!req.body || !Array.isArray(req.body) || req.body.length === 0) {
      return res.status(400).json({ error: 'El cuerpo de la solicitud debe ser un array no vacío.' })
    }
    next()
  }

export default {
    carritosMiddleware
}