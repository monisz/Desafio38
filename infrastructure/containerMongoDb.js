const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB);
logger.info("conectados a mongo");

class Container {
    constructor (collection) {
        this.collection = collection;
        this.id = 1;
    }    

    async save(element) {
        try {
            const allItems = await this.collection.find(); 
            element['id'] = allItems.length + 1;
            try {
                const elementToSave = new this.collection(element)
                await elementToSave.save();
                logger.info(`agregado exitoso ${element.id}`);
            }
            catch (error) {
                logger.error(`el error al guardar fue: ${error}`);
            }
            return element.id;
        }
        catch (error) {
            logger.error(`error en Save ${error}`);
        }
    }
    

    //Agregué este método para complementar el put por id
    async replaceById(idSearch, data) {
        try {
            await this.collection.findOneAndUpdate({id: idSearch}, {$set: data});
            const result = await this.collection.find({id: idSearch});
            logger.info(`replace id: ${result[0].id}`);
            return result
        }
        catch (error) {
            logger.error(`error al reemplazar datos ${error}`);
        }
    }

    async getById(idSearch) {
        try {
            const objectFinded = await this.collection.find({id: idSearch});
            if (objectFinded.length > 0) {
                logger.info(`objeto encontrado en getById, id: ${objectFinded[0].id}`);
                return objectFinded;
            }
            else return null;
        }
        catch (error) {
            logger.error(`error al buscar por id ${error}`);
        }
    }

    async getAll() {
        try {
            const allItems = await this.collection.find();
            return allItems;
        }
        catch (error) {
            logger.error(`error en getAll ${error}`);
            return [];
        }
    }

    async deleteById(idSearch) {
        try {
            return result = await this.collection.deleteOne({id: idSearch});
        }
        catch (error) {
            logger.error(`error en deleteById ${error}`);
        }
    }
}

const productsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    code: {type: String, require: true},
    thumbnail: {type: String, require: true},
    price: {type: Number, require: true},
    stock: {type: Number, require: true},
    timestamp: {type: Date, require: true},
    id: {type: Number, require: true}
});

const Product = mongoose.model("product", productsSchema);
class Products extends Container {
    constructor() {
        super(Product);
    }
};
const colProduct = new Products();

const cartsSchema = new mongoose.Schema({
    timestamp: {type: Date, require: true},
    id: {type: Number, require: true},
    products : []
});
const Cart = mongoose.model("cart", cartsSchema);

class Carts extends Container {
    constructor(){
        super(Cart);
    }
};
const colCart = new Carts();

const UsersSchema = new mongoose.Schema({
    username: {type: String, require: true},
    name: {type: String, require: true},
    address: {type: String, require: true},
    age: {type: Number, require: true},
    phone: {type: Number, require: true}
});

const User = mongoose.model("user", UsersSchema);
class Users extends Container {
    constructor() {
        super(User);
    }
};
const colUser = new Users();

module.exports = { Container, colProduct, colCart, colUser };

