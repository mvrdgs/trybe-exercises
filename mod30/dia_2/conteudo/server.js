const net = require('net');

const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  connection.on('end', () => {
    console.log('Cliente desconectado');
  });

  connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);
});

server.listen(8000, () => console.log('Servidor escutando porta 8000'));
