const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const robot = require('robotjs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static('public'));

// Estado para evitar múltiples peticiones simultáneas
let isMoving = false;

// Escuchar conexiones de Socket.IO
io.on('connection', (socket) => {
  console.log('Nuevo dispositivo conectado:', socket.id);

  // Cuando el usuario envíe un código, se unirá a una sala con ese código
  socket.on('join-room', (code) => {
    socket.join(code);  // Unir al socket a la sala cuyo identificador es el código
    console.log(`Socket ${socket.id} unido a la sala con código: ${code}`);

    // Verificar si el socket está en la sala correcta
    const room = io.sockets.adapter.rooms.get(code);
    if (room) {
      console.log(`Sala ${code} tiene ${room.size} dispositivos conectados`);
    } else {
      console.log(`Error al unirse a la sala ${code}`);
    }
  });

  // Escuchar el evento 'move' solo dentro de la sala correcta
  socket.on('move', (data) => {
    const { code, direction } = data;

    if (isMoving) {
      console.log('Movimientos múltiples bloqueados');
      return; // Ignora si ya estamos procesando un movimiento
    }

    isMoving = true; // Bloquea nuevos movimientos mientras se procesa uno

    // Simula la tecla si el código de la sala es correcto
    if (io.sockets.adapter.rooms.get(code)) {
      console.log(`Movimiento en sala ${code}: ${direction}`);
      
      if (direction === 'left') {
        robot.keyTap('left');
      } else if (direction === 'right') {
        robot.keyTap('right');
      }
    }

    // Desbloquear el siguiente movimiento tras 100 ms
    setTimeout(() => {
      isMoving = false;
    }, 100);
  });

  socket.on('disconnect', () => {
    console.log(`Dispositivo ${socket.id} desconectado`);
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});