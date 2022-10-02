const mysql = require('mysql2/promise');

async function connectDB() {    
    const connection = await mysql.createConnection({
        database: 'expressdb',
        user: '',
        host: 'us-east.connect.cloud',
        password: '',
        ssl: {
            rejectUnauthorized: false
        }
    });

    const result = await connection.query('SELECT "Hello World" AS result');
    console.log(result);
}


module.exports = connectDB;