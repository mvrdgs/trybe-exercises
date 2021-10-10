const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../src/index');
const { Book } = require('../../../src/models');

describe('Busca todos os livros', () => {
  describe('quando não existe nenhum livro cadastrado', () => {
    const findAllStub = stub(Book, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('called Book.findAll', async () => {
      await chai.request(app)
        .get('/books');

      expect(Book.findAll.calledOnce).to.be.equals(true);
    });

    it('o status é 200', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.status).to.be.equals(200);
    });

    it('a resposta é um array', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.body).to.be.an('array');
    });

    it('o array está vazio', async () => {
      const result = await chai.request(app)
        .get('/books');

      expect(result.body).to.be.empty;
    });
  });
});

describe('Busca um livro', () => {
  describe('quando não encontra o livro', () => {
    const findByPkStub = stub(Book, 'findByPk');

    before(() => {
      findByPkStub.resolves(null);
    });

    after(() => {
      findByPkStub.restore();
    });

    it('called Book.findByPk', async () => {
      await chai.request(app)
        .get('/book/1');

      expect(Book.findByPk.calledOnce).to.be.equals(true);
    });

    it('o status é 404', async () => {
      const result = await chai.request(app)
        .get('/book/1');

      expect(result.status).to.be.equals(404);
    });

    it('a resposta é um objeto', async () => {
      const result = await chai.request(app)
        .get('/book/1');

      expect(result.body).to.be.an('object');
    });

    it('retorna a mensagem "Livro não encontrado"', async () => {
      const result = await chai.request(app)
        .get('/book/1');

      expect(result.body.message).to.be.equals('Livro não encontrado');
    });
  });
});

// describe('Busca um livro', () => {
//   describe('quando busca um livro com sucesso', () => {
//     const findByPkStub = stub(Book, 'findByPk');
//     const mockedBook = {
//       id: 1,
//       title: 'O Senhor dos Anéis',
//       author: 'Tokien',
//       createdAt: '2021-10-09T23:23:46.000Z',
//       updatedAt: '2021-10-09T23:23:46.000Z'
//     };

//     before(() => {
//       findByPkStub.resolves(mockedBook);
//     });

//     after(() => {
//       findByPkStub.restore();
//     });

//     it('called Book.findByPk', async () => {
//       await chai.request(app)
//         .get('/book/1');

//       expect(Book.findByPk.calledOnce).to.be.equals(true);
//     });

//     it('o status é 200', async () => {
//       const result = await chai.request(app)
//         .get('/book/1');

//       expect(result.status).to.be.equals(200);
//     });

//     it('a resposta é um objeto', async () => {
//       const result = await chai.request(app)
//         .get('/book/1');

//       expect(result.body).to.be.an('object');
//     });

//     it('retorna as informações do livro', async () => {
//       const result = await chai.request(app)
//         .get('/book/1');

//       expect(result.body).to.be.equals(mockedBook);
//     });
//   });
// });
