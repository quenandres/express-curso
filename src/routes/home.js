const { Router } = require('express');
const router = Router();

router.get('/about', (req, res) => {
    const title = 'Mi pagina creada desde express 2';
    res.render('index', { title });
});

router.get('/dashboard', (req, res) => {
    res.send('Dashboard page');
});

module.exports = router;
