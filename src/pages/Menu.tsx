import PlayerCard from "@/components/PlayerCard";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const fake_users = [
    { id: 0, username: "Joao Gabriel Vianna", score: 1000 },
    { id: 1, username: "Rafael Bisi Succi", score: 900 },
    { id: 2, username: "Pedro Daniluz", score: 800 },
    { id: 3, username: "Pedro Henrique Pinheiro", score: 700 },
    { id: 4, username: "Hellynson", score: 600 },
    { id: 5, username: "Aika Sabrina", score: 500 },
  ];


  const rank_users = fake_users.sort((a, b) => b.score - a.score);

  const StartGameButton = () => {
    navigate('/tutorial')
  }


  return (
    <main className="flex  gap-96 h-screen p-16 text-white bg-background">
      <section className="flex-1 flex flex-col items-start gap-16">
        <header className="flex items-center">
          <img src="/sync-h.svg" alt="Sync-H" className="size-52" />
          <h1 className="bg-clip-text text-transparent bg-primary-gradient text-8xl font-bold">
            Sync-H
          </h1>
        </header>
        <div>
          <p className="w-2/4 text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit nulla sed dui fringilla aliquet. Donec tempus arcu erat.
          </p>
        </div>

        {/* SPACING */}
        <div className="flex-1" />

        <button onClick={StartGameButton} className="flex items-center justify-center bg-primary-gradient px-32  py-4 rounded-3xl transition-all opacity-95 hover:opacity-100">
          <img src="/controller.svg" alt="" />
          <p className="text-3xl text-background font-bold">Nova Partida</p>
        </button>
      </section>
      <section className="flex-1 flex flex-col gap-16">
        <header className="flex items-center">
          <h1 className=" text-4xl font-bold">
            Placar geral
          </h1>
        </header>
        <div className="flex flex-col gap-4">
          {rank_users.map((user, index) => (
            <PlayerCard key={user.id} username={user.username} score={user.score} rank={index + 1} />
          ))}
        </div>
      </section>
      <img src="/sync-h-letter.svg" alt="" className="absolute bottom-0 right-0" />
    </main>
  );
}

export default Menu;