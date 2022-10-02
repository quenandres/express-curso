const mysql = require('mysql2/promise');

async function connectDB() {    
    const connection = await mysql.createConnection({
        database: 'expressdb',
        user: 'awj8ym9cv6wjnmcwost2',
        host: 'us-east.connect.psdb.cloud',
        password: 'pscale_pw_SwjF4iJ2zjVPSnue3TMeKVuvcxOuS8Hb402mgzoflb2',
        ssl: {
            rejectUnauthorized: false
        }
    });

    const result = await connection.query('SELECT "Hello World" AS result');
    console.log(result);
}


module.exports = connectDB;