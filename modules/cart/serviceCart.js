const { Container, colCart } = require('../../src/containers/containerMongoDb');

//Para obtener un carrito según su id
const getCart = async (id) => {
    const cartFinded = await colCart.getById(id);
    return cartFinded;
}

//Para actualizar un carrito por id
const updateCart = async (id, newData) => {
    const updatedCart = await colCart.replaceById(id, newData);
    return updatedProduct;
};

//Para borrar un carrito según el id
const deleteCart = async (id) => {
    const result = await colCart.deleteById(id);
    return result;
};

module.exports = { getCart, updateCart, deleteCart};