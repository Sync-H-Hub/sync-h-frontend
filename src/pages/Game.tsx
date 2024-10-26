// src/components/GameInfo.js
import handsModel, { HandKeys } from '@/models/handModel';
import React, { useEffect, useState } from 'react';

const ENDPOINT = "ws://localhost:3000/websocket"; // Endpoint do WebSocket

const GameInfo = () => {
  const [gameInfos, setGameInfos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState(null);
  const [round, setRound] = useState<HandKeys[]>(["hand_L"]); // Defina round como um array de HandKeys
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0); // Índice do slider de rodadas

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

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex gap-96 h-screen px-64 py-32 text-white bg-background">
      <section className="flex-1 flex flex-col items-center gap-16 z-10">
        <header className="w-full flex justify-between items-center">
          <h1 className="text-4xl">Rodada {round.length}</h1>
          <div className="bg-graphite px-4 py-2 rounded-3xl">
            <p className="text-primary text-4xl">{score} pontos</p>
          </div>
        </header>

        <div className="flex flex-col items-center">
          <div className="flex gap-4 items-center">
            {round.map((hand, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-graphite rounded-3xl p-4 transition-all hover:-translate-y-1 relative overflow-hidden">
                  <img
                    src={handsModel[hand]}
                    alt={hand}
                    className="rounded-3xl transition-all duration-200"
                    style={{
                      filter: index > currentIndex ? "blur(30px)" : "none",
                    }}
                  />
                </div>

                <div
                  className={`w-10 h-10 rounded-full bg-graphite ${
                    index === currentIndex ? "bg-primary" : ""
                  } transition-all`}
                ></div>

                {index < round.length - 1 && (
                  <div
                    className={`h-1 ${
                      index === currentIndex ? "bg-primary" : "bg-graphite"
                    } w-10`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % round.length)}
          className="mt-4 bg-primary px-4 py-2 rounded text-white"
        >
          Avançar Rodada
        </button>
      </section>
      <img src="/sync-h-letter.svg" alt="" className="absolute bottom-0 right-0 z-0" />
    </main>
  );
};

export default GameInfo;
