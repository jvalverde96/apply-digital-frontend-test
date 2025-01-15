import { Game } from '@/utils/endpoint';
import Image from 'next/image';

interface GameItemProps {
  game: Game;
}

const GameItem = ({ game }: GameItemProps) => {
  return (
    <div className="flex flex-col w-[327px] sm:w-[380px] h-[436px] border-[0.5px] rounded-2xl p-6 gap-5">
      <Image
        alt=""
        width={332}
        height={240}
        src={game.image}
        className="w-[332px] h-[240px] rounded-tl-2xl	rounded-tr-2xl"
      />
      <div className="flex flex-col gap-3">
        <p className="text-sm	leading-4 font-bold text-text-secondary">
          {game.genre.toLocaleUpperCase()}
        </p>
        <div className="text-sm	flex items-center justify-between font-bold">
          <p>{game.name}</p>
          <p>${game.price}</p>
        </div>
      </div>

      <button className="px-6 py-2 border border-black font-bold rounded-md">
        ADD TO CART
      </button>
    </div>
  );
};

export default GameItem;
