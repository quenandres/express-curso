
function HomeRoutes(app) {
    app.get('/about', (req, res) => {
        res.send('about page');
    });
    
    
    app.get('/dashboard', (req, res) => {
        res.send('Dashboard page');
    });
}

module.exports = HomeRoutes;
