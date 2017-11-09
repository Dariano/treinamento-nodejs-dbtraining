const express = require('express')
const app = express()
const models = require('./models')

models.sequelize.sync().done()

const livrosRoutes = require('./livros/livros-routes')

livrosRoutes(app)

module.exports = app