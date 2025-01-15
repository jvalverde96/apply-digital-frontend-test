'use client';

import { allGames } from '@/utils/endpoint';
import GameItem from './game-item';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const GameList = () => {
  // The instructions don't specify the exact number of records to display in the grid,
  // but based on the mockup, I'm assuming 12 items should be shown initially.
  const [gamesToShow, setGamesToShow] = useState(12);

  const searchParams = useSearchParams();

  const filteredGames = useMemo(() => {
    const genre = searchParams?.get('genre');
    // Filter games by genre if a valid genre is selected
    return genre && genre !== 'all'
      ? allGames.filter((game) => game.genre.toLocaleLowerCase() === genre)
      : allGames;
  }, [searchParams]);

  const displayedGames = useMemo(() => {
    return filteredGames.slice(0, gamesToShow);
  }, [filteredGames, gamesToShow]);

  useEffect(() => {
    setGamesToShow(12);
  }, [searchParams]);

  const handleLoadMore = () => {
    setGamesToShow((previousValue) => previousValue + 12);
  };

  return (
    <div className="custom-container flex flex-col gap-12 py-12">
      <div className="flex-grow grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 place-items-center">
        {displayedGames.length > 0 ? (
          displayedGames.map((game) => <GameItem key={game.id} game={game} />)
        ) : (
          <p>No games found for the selected genre.</p>
        )}
      </div>
      {/* Load More Button */}
      {displayedGames.length < filteredGames.length && (
        <div className="flex items-start justify-center 2xl:justify-start">
          <button
            onClick={handleLoadMore}
            className="w-[327px] md:w-auto px-6 py-3 bg-blue-500 text-base text-white rounded-lg bg-secondary"
          >
            SEE MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default GameList;
