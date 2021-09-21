require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.use(express.static(path.join(__dirname, '/uploads')));

// const upload = multer({ dest: 'uploads' });

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'uploads'),
  filename: (req, file, callback) => {
    callback(null, `${Date.now()} ${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), controllers.upload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
