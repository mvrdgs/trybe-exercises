const { MongoClient } = require('mongodb');

const MONGO_DB_URL = '127.0.0.1:27017';

let schema = null;

async function getConnection() {
  if (schema) return Promise.resolve(schema);

  return MongoClient
    .connect(MONGO_DB_URL, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('movies_example'))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports = { getConnection }
