const { Router } = require('express');
const router = Router();

router.get('/about', (req, res) => {
    res.send('about page');
});

router.get('/dashboard', (req, res) => {
    res.send('Dashboard page');
});

module.exports = router;
