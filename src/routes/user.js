function UserRoutes(app) {
    app.get('/Profile', (req, res) => {
        res.send('profile page');
    });
    
    app.get('/Username', (req, res) => {
        res.send('User name');
    });
}

module.exports = UserRoutes;
