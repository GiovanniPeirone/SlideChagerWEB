const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('UI'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/UI/PC.html')
});

app.get('api/data', (req, res) => {
  let mensaje = { tecla : "null"}
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});