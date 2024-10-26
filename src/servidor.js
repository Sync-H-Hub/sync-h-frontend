// servidor.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    // Enviar uma mensagem quando a conexão é estabelecida
    socket.send('Connection established');

    // Escutar mensagens do cliente
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        // Responder ao cliente
        socket.send(`Server received: ${message}`);
    });

    // Tratar a desconexão
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
