const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const robot = require('robotjs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//http://192.168.0.5:3000

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Escuchar conexiones de Socket.IO
io.on('connection', (socket) => {
  console.log('Usuario conectado');

  // Recibir evento de izquierda o derecha desde el móvil
  socket.on('move', (direction) => {
    console.log('Movimiento recibido:', direction);
    
    // Simular la pulsación de tecla según la dirección
    if (direction === 'left') {
      robot.keyTap('left'); // Simula la tecla izquierda
    } else if (direction === 'right') {
      robot.keyTap('right'); // Simula la tecla derecha
    }
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`);
});