const express = require('express');

const app = express(); //Server

app.get('/', (req, res) => {
    res.send('Hello world');
})


app.get('/mi-archivo', (req, res) => {
    res.sendFile('./logo.jpg',{
        root: __dirname
    });
})


app.get('/user', (req, res) => {
    res.json({
        name: "quenandres",
        lastname: "Maul",
        age: 27,
        points: [1,2,3],
        addres: {
            city: "new york",
            street:"some street 123"
        }
    });
})

app.get('/isAlive', (req, res) => {
    res.sendStatus(204);
});

app.listen(3000);
console.log('server on port 3000');