const { Container, colCart } = require('../../src/containers/containerMongoDb');

const defineUser = (dataUser) => {
    return {
        username: dataUser[0].username,
        name: dataUser[0].name,
        address: dataUser[0].address,
        age: dataUser[0].age,
        phone: dataUser[0].phone
    }
};

const createCart = async () => {
    const newCart = {
        timestamp : Date.now(),
        products: []
    };
    return await colCart.save(newCart);
};

module.exports = { defineUser, createCart};