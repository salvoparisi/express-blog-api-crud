const notFoundMiddleware = (req, res, next) => {
    res.status(404).send("Nessun elemento trovato")
}

module.exports = notFoundMiddleware;