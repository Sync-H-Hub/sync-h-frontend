// src/components/GameInfo.js
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const GameInfo = () => {
  const [gameInfos, setGameInfos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Define o tipo do erro como string ou null

  const ENDPOINT = "http://192.168.15.100:3000"
  const [message, setMessage] = useState()
  useEffect(() => {

    const socket = io(ENDPOINT);
    socket.on('message', (data) => {
      console.log(`Receiveded message`, data)
      setMessage(data.data)
    })
    return () => {
      socket.disconnect();
    }
  }, []);

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
