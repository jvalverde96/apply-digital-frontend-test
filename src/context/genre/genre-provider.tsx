'use client';

import { ReactNode, useState } from 'react';
import { GenreContext } from './genre-context';

export const GenreProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(
    typeof window !== 'undefined' ? localStorage.getItem('selectedGenre') : null
  );

  const setGenre = (genre: string | null) => {
    setSelectedGenre(genre);
    if (genre) {
      localStorage.setItem('selectedGenre', genre);
    } else {
      localStorage.removeItem('selectedGenre');
    }
  };

  return (
    <GenreContext.Provider value={{ selectedGenre, setGenre }}>
      {children}
    </GenreContext.Provider>
  );
};
