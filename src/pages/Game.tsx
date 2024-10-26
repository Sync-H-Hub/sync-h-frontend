// src/components/GameInfo.js
import React, { useEffect, useState } from 'react';

const ENDPOINT = "ws://192.168.15.17:3000/websocket"; // Endpoint do WebSocket

const GameInfo = () => {
  const [gameInfos, setGameInfos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Cria uma nova conexão WebSocket
    const socket = new WebSocket(ENDPOINT);

    // Evento ao abrir a conexão
    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    // Evento ao receber uma mensagem
    socket.onmessage = (event) => {
      console.log(`Received message:`, event.data);
      setMessage(event.data);
    };

    // Evento ao encontrar um erro
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setError('WebSocket connection error');
    };

    // Evento ao fechar a conexão
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Limpeza ao desmontar o componente
    return () => {
      socket.close();
    };
  }, []);

  // Lógica de carregamento e erro
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Game Info</h1>
      {gameInfos ? (
        <pre>{message}</pre>
      ) : (
        <div>No game info available.</div>
      )}
    </div>
  );
};

export default GameInfo;
