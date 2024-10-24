import Gold from '@/assets/icons/gold-tropy.svg';
import Silver from '@/assets/icons/silver-tropy.svg';
import Bronze from '@/assets/icons/bronze-tropy.svg';

/**
 * Interface que define as propriedades do componente PlayerCard.
 * @interface PlayerCardProps
 * @property {string} username - Nome do jogador.
 * @property {number} score - Pontuação do jogador.
 * @property {number} rank - Posição do jogador no ranking.
 */
interface PlayerCardProps {
  username: string; // O nome do jogador
  score: number;    // A pontuação do jogador
  rank: number;     // O ranking do jogador
}

/**
 * Componente funcional que representa um cartão de jogador.
 * Ele exibe o nome, a pontuação e o ranking do jogador, junto com o troféu correspondente ao ranking.
 * 
 * @component
 * @param {PlayerCardProps} props - As propriedades do cartão do jogador.
 * @returns {JSX.Element} O cartão do jogador.
 */
const PlayerCard: React.FC<PlayerCardProps> = ({ username, score, rank }) => {

  /**
   * Função que retorna a imagem do troféu com base no ranking do jogador.
   * @param {number} rank - O ranking do jogador.
   * @returns {string} O caminho da imagem do troféu correspondente ou uma string vazia se o ranking não for 1, 2 ou 3.
   */
  const getTrophyImage = (rank: number): string => {
    switch (rank) {
      case 1:
        return Gold;
      case 2:
        return Silver;
      case 3:
        return Bronze;
      default:
        return '';
    }
  };

  return (
    <div className="flex-1 flex items-center gap-4">
      <div className="w-14 h-14 flex items-center justify-center p-4 rounded-full bg-graphite">
        <p className="text-primary text-3xl">{rank}</p>
      </div>
      <div className="w-14 h-14 flex-1 flex items-center justify-between p-4 rounded-full bg-graphite">
        <div className='flex items-center gap-4'>
          <h1 className="text-3xl">{username}</h1>
          {rank <= 3 && (
            <img src={getTrophyImage(rank)} alt={`Troféu ${rank}`} className="w-10 h-10" />
          )}
        </div>
        <p className="text-primary text-3xl">{score} pontos</p>
      </div>
    </div>
  );
};

export default PlayerCard;
