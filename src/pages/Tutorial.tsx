import { useNavigate } from "react-router-dom";

function Tutorial() {
  const navigate = useNavigate();

  const cards = [
    { id: 0, img: '/handGroup.svg', text: 'Algumas posições de mão aparecerão a cada rodada.' },
    { id: 1, img: '/realHand.svg', text: 'Algumas posições de mão aparecerão a cada rodada.' },
    { id: 2, img: '/medal.svg', text: 'Algumas posições de mão aparecerão a cada rodada.' },
  ]



  const StartGameButton = () => {
    navigate('/game')
  }

  return (
    <main className="flex items-center  gap-96 h-screen p-16 text-white bg-background">
      <section className="flex-1 flex flex-col items-center gap-16 z-10">
        <div className="flex gap-4">
          {cards.map((card, index) => (
            <div className="w-[500px] flex flex-col gap-6 relative  bg-graphite p-6 rounded-2xl" key={index}>
              <div className="absolute w-16 h-16  flex items-center justify-center top-0 left-0 bg-graphite p-4 rounded-2xl">
                <p className="text-3xl ">
                  {index + 1}
                </p>
              </div>

              <div className="rounded-2xl  bg-charcoal">
                <img src={card.img} alt="" className="w-[445.02px] h-[314px]" />
              </div>

              <div className=" flex items-center justify-center ">
                <h1 className="text-3xl">{card.text}</h1>
              </div>
            </div>
          ))}
        </div>


        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">Pronto?</p>
          <button onClick={StartGameButton} className="flex items-center justify-center bg-primary-gradient px-32  py-4 rounded-3xl transition-all opacity-95 hover:opacity-100">
            <p className="text-3xl text-background font-bold">Começar</p>
          </button>
        </div>
      </section>
      <img src="/sync-h-letter.svg" alt="" className="absolute bottom-0 right-0 z-0" />
    </main>
  );
}

export default Tutorial;