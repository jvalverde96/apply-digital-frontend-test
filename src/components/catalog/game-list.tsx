import { allGames } from '@/utils/endpoint';
import GameItem from './game-item';

const GameList = () => {
  return (
    <div className="custom-container grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 place-items-center">
      {allGames.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
