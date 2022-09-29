const { Router } = require('express');
const router = Router();

router.get('/Profile', (req, res) => {
    res.send('profile page');
});

router.get('/Username', (req, res) => {
    res.send('User name');
});

module.exports = router;