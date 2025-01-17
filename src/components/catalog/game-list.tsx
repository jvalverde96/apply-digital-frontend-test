'use client';

import { allGames } from '@/utils/endpoint';
import GameItem from './game-item';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import Spinner from '../shared/spinner';
import Button from '../shared/button';

const GameList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    setIsLoading(true);

    // Simulate a real-life loading scenario
    setTimeout(() => {
      setGamesToShow((previousValue) => previousValue + 12);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a real-life loading scenario
  }, []);

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
          <Button
            onClick={handleLoadMore}
            className="w-[327px] md:w-auto px-6 py-3 bg-secondary text-white text-base rounded-lg"
          >
            SEE MORE
          </Button>
        </div>
      )}
      <Spinner isLoading={isLoading} />
    </div>
  );
};

export default GameList;
