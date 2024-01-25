const express = require('express')

const futController = require('./controllers/futController')
const filterController = require('./controllers/filterController')

const routes = express.Router()

routes.get('/fut', futController.getAllFuts)
routes.post('/fut', futController.createFut)
routes.delete('/fut/:id', futController.deleteFut)

routes.get('/myfut', filterController.filter)
routes.post('/fut/:id', futController.updateVagas)

module.exports = routes