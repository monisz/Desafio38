const { Container, colProduct } = require('../../infrastructure/containerMongoDb');

const getListProducts = async () => {
    const allProducts = await colProduct.getAll();
    return allProducts;
}

//Para obtener un producto según su id
const getProduct = async (id) => {
    const productFinded = await colProduct.getById(id);
    return productFinded;
}

//Para agregar un producto
const addProductToList = async (newProduct) => {
    newProduct.timestamp = Date.now();
    const newId = await colProduct.save(newProduct);
    return newId;
};

//Recibe y actualiza un producto por id
const replaceProduct = async (id, newData) => {
    const updatedProduct = await colProduct.replaceById(id, newData);
    return updatedProduct;
};

//Para borrar un producto según el id
const deleteProduct = async (id) => {
    const result = await colProduct.deleteById(id);
    return result;
};

module.exports = { getListProducts, getProduct, addProductToList, replaceProduct, deleteProduct };