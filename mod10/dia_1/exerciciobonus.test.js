const searchEmployee = require('./exerciciobonus');

describe('Teste da função searchEmployee', () => {
  it('Verifica se a função existe', () => {
    expect(searchEmployee).toBeInstanceOf(Function);
  })
  it('Verifica ID inválido', () => {
    expect(() => { searchEmployee('0000', 'lastName') }).toThrowError(new Error('ID não identificada'))
  });
  it('Verifica informação válida', () => {
    expect(() => { searchEmployee('8579-6', 'age') }).toThrowError(new Error('Informação indisponível'));
  });
  it('Testa informações', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual({ id: '8579-6', firstName: 'Ana' });
  });
  it('Testa informações', () => {
    expect(searchEmployee('4678-2', 'lastName')).toEqual({ id: '4678-2', lastName: 'Dodds' });
  });
  it('Testa informações', () => {
    expect(searchEmployee('4456-4', 'specialities')).toEqual({ id: '4456-4', specialities: ['Context API', 'RTL', 'Bootstrap'] });
  });
});
