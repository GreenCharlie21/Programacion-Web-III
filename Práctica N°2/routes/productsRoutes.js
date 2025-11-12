import express from 'express';
import { createProductController, getAllProductsController, getProductByIdController, updateProductController, updateProductStockController } from '../controllers/productController.js';

const router = express.Router();

//Ejercicio 6
router.post('/', createProductController);

//Ejercicio 7
router.get('/', getAllProductsController);

//Ejercicio 8
router.get('/:id', getProductByIdController);

//Ejercicio 9
router.put('/:id', updateProductController);

//Ejercicio 10
router.patch('/:id/stock', updateProductStockController);

export default router;