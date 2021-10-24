const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000/',
    methods: ['GET', 'POST'],
  },
});

let likeCount = 0;

io.on('connection', (socket) => {
  console.log('usuário conectado. ID: ', socket.id);

  socket.on('likePost', () => {
    likeCount += 1;

    console.log(likeCount);

    io.emit('likeCount', { likeCount })
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => console.log('Listening at port 3000'));
