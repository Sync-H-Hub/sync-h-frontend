// src/components/GameInfo.tsx
import handsModel, { HandKeys } from '@/models/handModel';
import { useEffect, useState } from 'react';

const ENDPOINT = "ws://localhost:3000/websocket";

interface Desafio {
  nome: "A" | "B" | "C" | "D" | "E";
  status: boolean;
  timer: number;
}

const GameInfo = () => {
  const [error, setError] = useState<string | null>(null);
  const [round, setRound] = useState<HandKeys[]>([]);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  useEffect(() => {
    const socket = new WebSocket(ENDPOINT);

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };
    setCurrentScore(0)
    socket.onmessage = (event) => {
      
      console.log(`Received message:`, event.data);
      try {
        const jsonObject = JSON.parse(event.data);
        if (jsonObject.body.rodada) {
          const desafios: Desafio[] = jsonObject.body.desafios;
          const letters = desafios.map((d) => d.nome);
          setCurrentIndex(0)
          setCurrentScore(currentScore + 1)
          setRound(letters);
        }
        if (jsonObject.body.message) {
          console.log(jsonObject.body.message)
          if (jsonObject.body.message.toString() == "desafio_concluido") {
            setCurrentIndex((prev) => prev + 1)
            const scores: number = jsonObject.body.score;
            setScore(scores)
          }
        }
      } catch (error) {
        console.error("Erro ao converter mensagem para objeto:", error);
        setError('Error parsing message');
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      setError('WebSocket connection error');
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

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
                    style={{ filter: index > currentIndex - 1 ? "blur(40px)" : "none" }}
                  />
                </div>
                {index}
                {currentIndex}

                <div className={`w-10 h-10 rounded-full bg-graphite ${index < currentIndex ? "bg-primary" : ""} transition-all`}></div>
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
