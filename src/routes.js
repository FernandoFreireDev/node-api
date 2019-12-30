const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductsController');

routes.get('/products', ProductsController.index);
routes.get('/products/:product_id', ProductsController.show);
routes.post('/products', ProductsController.store);
routes.put('/products/:product_id', ProductsController.update);
routes.delete('/products/:product_id', ProductsController.destroy);

module.exports = routes;