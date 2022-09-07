const express = require('express');

const routerUsers = require()
const routerProducts = require('../daos/productsDaoMongoDb');
const routerCart = require('../daos/cartDaoMongoDb');
const routerMessages = require('../daos/messagesDao_firebase');
const routerRandom = require('../daos/numbersRandom');

const router = express.Router();

router.use('/', routerUsers);
router.use('/api/productos', routerProducts);
router.use('/api/carrito', routerCart);
router.use('/api/mensajes', routerMessages);
router.use('/api/randoms', routerRandom);

module.exports = router;