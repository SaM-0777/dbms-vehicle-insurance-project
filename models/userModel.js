const mySql = require('mysql');


// Database
const db = mySql.createConnection({
    host: '127.0.0.1',
    port: process.env.MYSQL_PORT,
    ssl: process.env.MYSQL_SSL,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    insecureAuth: true
});

db.connect((error) => {
    if (error) {
        console.error('error connecting: ' + error.stack);
        return;
    }
    console.log('connected as id ' + db.threadId);
})

const Query = (db.query('SELECT * FROM CITY', (error, results, fields) => {
    if (error) throw error
    console.log('The solution is: ', results[0].solution);
    db.end();
}));


module.exports = Query;

