// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   user: 'root',
//   password: '12345678',
//   host: 'localhost',
//   database: 'model_example',
// });

// module.exports = connection;

const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
    .connect(MONGODB_URL, {
      // urlNewParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'))
    .catch((err) => {
      console.log(err);
      process.exit();
    });
};

module.exports = connection;
