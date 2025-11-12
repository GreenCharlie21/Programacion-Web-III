import express from 'express';
import { createCategoryController, getAllCategoriesController, getCategoryByIdController, updateCategoryController, deleteCategoryController } from '../controllers/categoryController.js';

const router = express.Router();

//Ejercicio 1
router.post('/', createCategoryController);

//Ejercicio 2  
router.get('/', getAllCategoriesController);

//Ejercicio 3
router.get('/:id', getCategoryByIdController);

//Ejercicio 4
router.put('/:id', updateCategoryController);

//Ejercicio 5
router.delete('/:id', deleteCategoryController);
export default router;