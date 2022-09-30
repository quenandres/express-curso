const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    let isActive = true;

    const users = [
        {
            id: 1,
            name: "ryan",
            lastname: "Scoot"
        },
        {
            id: 2,
            name: "Clint",
            lastname: "Easwoot"
        }
    ];

    res.render('index', { 
        title: 'indexPage', 
        isActive,
        users
    });
});

router.get('/about', (req, res) => {
    
    res.render('about');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

module.exports = router;
