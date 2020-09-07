const routes = require('express').Router()

const CategoryController = require('./controllers/categoryController')
const VideoController = require('./controllers/videoController')
const MixedController = require('./controllers/mixedController')

routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)
routes.delete('/categories/:id', CategoryController.deleteOne)
routes.delete('/categories', CategoryController.deleteAll)

routes.get('/mixed', MixedController.index)

routes.get('/videos', VideoController.index)
routes.post('/videos', VideoController.store)
routes.delete('/videos/:id', VideoController.deleteOne)
routes.delete('/videos', VideoController.deleteAll)


module.exports = routes