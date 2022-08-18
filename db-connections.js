var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'database-2.ccbqtvifzmrg.us-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'tG059014',
    database: 'restaurant_review'
});

connection.connect(err => { // test out connection
    if (err) throw err;
    console.log('Connected To DB');
});
module.exports = connection;
