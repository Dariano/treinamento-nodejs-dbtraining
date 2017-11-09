const models = require('../models')
const Livros = models.Livros

class LivrosController {
    todos(req, res) {
        Livros
            .findAll({})
            .then(livros => res.json(livros))
    }
}

module.exports = new LivrosController()