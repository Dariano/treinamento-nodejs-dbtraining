const { todos } = require('./livros-controller')

module.exports = (app) => {
    app.route('/livros')
        .get(todos)
}