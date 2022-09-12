const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json()); // Middleware para que interprete json

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 5100
    }
];

app.get('/products', (req, res) => {
    res.json(products);    
});

app.post('/products', (req, res) => {    
    const newProduct = {...req.body, "id": products.length + 1};
    products.push(newProduct);
    res.json(newProduct);
});

app.put('/products', (req, res) => {
    res.send('actualizacion product');
});

app.delete('/products', (req, res) => {
    res.send('Eliminando product');
});

app.get('/products/:id', (req, res) => {
    try {
        const productFound = products.find(product => product.id === parseInt(req.params.id));
        if( !productFound ) {
            throw new Error('Product not found');
        }
        res.json(productFound);
    } catch (error) {
        res.status(404).json({message: error.message});
    }    
});

app.listen(3000);
console.log('Server on port 3000');