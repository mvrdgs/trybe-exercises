const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const moviesModel = require('../../models/Movies');

describe('Quando um filme é passado', () =>{
  before(async () => {
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();

    connectionMock = await MongoClient 
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((conn) => conn.db('movies_example'));

      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  const payloadMovie = {
    id: 101,
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    await connectionMock.collection('movies').insertOne(payloadMovie)
  });

  describe('Com sucesso', () => {
    it('Retona um objeto', async () => {
      const resp = await moviesModel.getMovieById(101);

      expect(resp).to.be.a('object');
    });

    it('Retorna um objeto com todas as propriedades do filme', async () => {
      const resp = await moviesModel.getMovieById(101);

      expect(resp).to.be.deep.equal(payloadMovie)
    });
  });

  describe('E não for encontrado', () => {
    it('Retorna "null"', async () => {
      const resp = await moviesModel.getMovieById(000);

      expect(resp).to.be.null;
    });
  });
});
