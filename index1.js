import express from 'express';
import port from './config.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Servidor escuchado en http://localhost:${port}`);
  });