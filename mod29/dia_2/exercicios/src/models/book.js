const Book = (queryInterface, dataTypes) => {
  const Book = queryInterface.define('Book', {
    title: dataTypes.STRING,
    author: dataTypes.STRING,
  });

  return Book;
}

module.exports = Book;
