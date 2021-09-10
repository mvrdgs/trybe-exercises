const mongoConnection = require('./connection');

const getMovieById = async (id) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movie = await moviesCollection
    .findOne({ id });

    // console.log(movie);

  return movie;
}

module.exports = {
  getMovieById,
};
