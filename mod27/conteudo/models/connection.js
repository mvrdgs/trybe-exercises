const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '12345678',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection;
