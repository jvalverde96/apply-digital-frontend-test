import { useGenreContext } from '@/context/genre/useGenreContext';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo } from 'react';

const Breadcrumb = () => {
  const { selectedGenre } = useGenreContext();

  const href = useMemo(() => {
    return `catalog/${selectedGenre ? `?genre=${selectedGenre}` : ''}`;
  }, [selectedGenre]);

  return (
    <Link href={href}>
      <button className="flex gap-4">
        <ArrowLeft width={24} height={24} />
        <p>Back to Catalog</p>
      </button>
    </Link>
  );
};

export default Breadcrumb;
