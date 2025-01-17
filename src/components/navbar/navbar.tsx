'use client';

import { useGenreContext } from '@/context/genre/useGenreContext';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

const Navbar = () => {
  const { selectedGenre } = useGenreContext();

  const href = useMemo(() => {
    return `catalog/${selectedGenre ? `?genre=${selectedGenre}` : ''}`;
  }, [selectedGenre]);

  return (
    <header className="bg-header sticky top-0 left-0 z-10">
      <nav className="h-[64px] flex items-center justify-between custom-container">
        <Link href={href} className="text-2xl leading-6 tracking-[0.4px]">
          Gamer Shop
        </Link>
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
