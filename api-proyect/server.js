const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json()); // Middleware para que interprete json

let products = [
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

app.put('/products/:id', (req, res) => {
    try {
        const newData = req.body; // { name: '', price:'' }
        const productFound = products.find(product => product.id === parseInt(req.params.id));
        
        if( !productFound ) {
            throw new Error('Product not found');
        }

        products = products.map(product => product.id === parseInt(req.params.id) ? {...product, ...newData} : product);
        console.log(products);
        res.status(200).json({message: 'Updated product'});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
});

app.delete('/products/:id', (req, res) => {
    try {
        const productFound = products.find(product => product.id === parseInt(req.params.id));
        
        if( !productFound ) {
            throw new Error('Product not found');
        }

        products  = products.filter(product => product.id !== parseInt(req.params.id));        
        res.sendStatus(204);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
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