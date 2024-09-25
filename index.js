const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('UI'));


let Tecla = 'Null';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/UI/PC.html')
});

app.get('/api/info', (req, res) => {
  res.json({ 
    mensaje: Tecla
 });
});

app.put('/api/info', (req, res) => {
  // Aquí debes definir qué hacer con los datos que recibes
  const newValue = req.body.value;
  // Actualiza la información como desees
  data.value = newValue; // Suponiendo que `data` es tu objeto de datos
  res.json(data); // Responde con el objeto actualizado
});

app.post('/api/valor', (req, res) => {
  const nuevoValor = req.body.valor;
  
  const mensaje = req.body.mensaje;
    console.log('Mensaje recibido:', mensaje);
    // Respuesta de ejemplo


  if (nuevoValor) {
    valorAPI = nuevoValor;
    res.json({ mensaje: 'Valor actualizado correctamente', nuevoValor });
  } else {
    res.status(400).json({ mensaje: 'Valor no proporcionado' });
  }
});


app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});