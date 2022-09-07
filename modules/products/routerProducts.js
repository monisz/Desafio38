const router = express.Router();
const isAdmin = require('./middlewares/isAdmin');

logger.info(`admin en routerProducts ${admin}`);

//Vista de todos los productos
router.get('/', getAllProducts);

//Para obtener un producto según su id
router.get('/:id', getProductById);

//Para agregar un producto
router.post('/', isAdmin, addProduct);

//Recibe y actualiza un producto por id
router.put('/:id', isAdmin, updateProduct);

//Para borrar un producto según su id
router.delete('/:id', isAdmin, deleteProductById);

module.exports = router;