const express = require('express');

const routerUsers = require('../../modules/users/routerUsers');
const routerProducts = require('../../modules/products/routerProducts');
const routerCart = require('../../modules/cart/routerCart');
const routerMessages = require('../daos/messagesDao_firebase');
const routerRandom = require('../daos/numbersRandom');

const router = express.Router();

router.use('/', routerUsers);
router.use('/api/productos', routerProducts);
router.use('/api/carrito', routerCart);
router.use('/api/mensajes', routerMessages);
router.use('/api/randoms', routerRandom);

module.exports = router;