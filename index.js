const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('UI'));

/*
null : Nada
true : derecha (right)
false: isquierda (left)
*/
let key = null;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'UI', 'mobile.html'));
});

app.get('api/key', (req, res) => {
  res.json(key)
});


app.post('api/change_data', (req, res) => {
  const newKey = req.body.key;
  key = newKey;
  console.log(`The new vasle id ${key}`);
  res.json( { key : key } );
});


app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});