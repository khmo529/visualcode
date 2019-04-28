const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mysql = require('mysql');

const app = express();
const users = require('./routes/users');
// port number
const port = 2000;

// CORS Middleware
app.use(cors());
// Body Parser Middleware
app.use(bodyparser.json());

app.use('/users', users);

// 서비스 준비중 콜백
app.get('/', (req, res) => {
    res.send('<h1>서비스 준비중...</h1>');
});
// Start server
app.listen(port, function() {
    console.log("server started on port " + port);
});

// mysql 데이터베이스 연동
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '0000',
    database: 'coconut',
    port: 3306
});

connection.connect();

connection.query('INSERT INTO user values(1, "kwon")', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.', err);
});

connection.query('SELECT * from user', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.', err);
});


connection.end();