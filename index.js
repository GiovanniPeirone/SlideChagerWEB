const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo desde mi primera API en Node.js!');
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});