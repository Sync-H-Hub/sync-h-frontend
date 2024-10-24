import { useNavigate } from "react-router-dom";

function Tutorial() {
  const navigate = useNavigate();
  const GobackButton = () => {
    navigate('/')
  }

  return (
    <main className="flex  gap-96 h-screen p-16 text-white bg-background">
      <section className="flex-1 flex flex-col items-center gap-16">
        <button onClick={GobackButton} className="flex items-center justify-center bg-primary-gradient px-32  py-4 rounded-3xl transition-all opacity-95 hover:opacity-100">
          <p className="text-3xl text-background font-bold">Voltar</p>
        </button>
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">Pronto?</p>
          <button onClick={() => {}} className="flex items-center justify-center bg-primary-gradient px-32  py-4 rounded-3xl transition-all opacity-95 hover:opacity-100">
            <p className="text-3xl text-background font-bold">Começar</p>
          </button>
        </div>
      </section>
      <img src="/sync-h-letter.svg" alt="" className="absolute bottom-0 right-0" />
    </main>
  );
}

export default Tutorial;