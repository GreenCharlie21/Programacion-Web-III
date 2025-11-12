import express from 'express';
import cors from 'cors';

import categoriesRoutes from '../routes/categoriesRoutes.js';
import productsRoutes from '../routes/productsRoutes.js';

const app = express();
const puerto = 3004;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use('/categories', categoriesRoutes);
app.use('/productos', productsRoutes);

app.get('/', (req, res) => {
    res.json({ 
        message: 'API Practica Web 3 - Funcionando!',
        author: 'Tu Nombre',
        endpoints: {
            categories: '/categories',
            products: '/productos'
        }
    });
});

app.listen(puerto, () => {
    console.log(` Servidor corriendo en http://localhost:${puerto}`);
});

export default app;