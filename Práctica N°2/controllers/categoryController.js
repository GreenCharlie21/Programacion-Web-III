import { createCategory, getAllCategories,getCategoryByIdWithProducts,updateCategory,deleteCategory } from '../models/categoryModel.js';

//Ejercicio 1
export const createCategoryController = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        if (!nombre) {
            return res.status(400).json({ 
                error: 'El campo nombre es obligatorio' 
            });
        }

        if (nombre.length > 100) {
            return res.status(400).json({ 
                error: 'El nombre no puede exceder 100 caracteres' 
            });
        }

        const result = await createCategory(nombre, descripcion);

        res.status(201).json({
            message: 'Categoría creada exitosamente',
            categoryId: result.insertId,
            nombre,
            descripcion
        });

    } catch (error) {
        res.status(500).json({ 
            error: 'Error interno del servidor',
            details: error.message 
        });
    }
};

//Ejercicio 2
export const getAllCategoriesController = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ 
            error: 'Error al obtener categorías',
            details: error.message 
        });
    }
};

//Ejercicio 3
export const getCategoryByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ 
                error: 'El ID debe ser un número válido' 
            });
        }

        const categoryData = await getCategoryByIdWithProducts(id);

        if (categoryData.length === 0) {
            return res.status(404).json({ 
                error: 'Categoría no encontrada' 
            });
        }

        const response = {
            id: categoryData[0].id,
            nombre: categoryData[0].nombre,
            descripcion: categoryData[0].descripcion,
            fecha_alta: categoryData[0].fecha_alta,
            fecha_act: categoryData[0].fecha_act,
            productos: categoryData
                .filter(row => row.producto_id !== null)
                .map(product => ({
                    id: product.producto_id,
                    nombre: product.producto_nombre,
                    precio: product.precio,
                    stock: product.stock,
                    fecha_alta: product.producto_fecha_alta
                }))
        };

        res.json(response);

    } catch (error) {
        res.status(500).json({ 
            error: 'Error al obtener categoría',
            details: error.message 
        });
    }
};

//Ejercicio 4
export const updateCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        if (isNaN(id)) {
            return res.status(400).json({ 
                error: 'El ID debe ser un número válido' 
            });
        }

        if (!nombre) {
            return res.status(400).json({ 
                error: 'El campo nombre es obligatorio' 
            });
        }

        if (nombre.length > 100) {
            return res.status(400).json({ 
                error: 'El nombre no puede exceder 100 caracteres' 
            });
        }

        const result = await updateCategory(id, nombre, descripcion);

        if (result.affectedRows === 0) {
            return res.status(404).json({ 
                error: 'Categoría no encontrada' 
            });
        }

        res.json({
            message: 'Categoría actualizada exitosamente',
            categoryId: id,
            nombre,
            descripcion
        });

    } catch (error) {
        res.status(500).json({ 
            error: 'Error al actualizar categoría',
            details: error.message 
        });
    }
};

//Ejercicio 5
export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;

        if (isNaN(id)) {
            return res.status(400).json({ 
                error: 'El ID debe ser un número válido' 
            });
        }

        const result = await deleteCategory(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ 
                error: 'Categoría no encontrada' 
            });
        }

        res.json({
            message: 'Categoría eliminada exitosamente junto con todos sus productos',
            categoryId: id
        });

    } catch (error) {
        res.status(500).json({ 
            error: 'Error al eliminar categoría',
            details: error.message 
        });
    }
};