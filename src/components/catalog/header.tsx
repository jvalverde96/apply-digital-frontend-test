'use client';

import { availableFilters } from '@/utils/endpoint';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const CatalogHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: selectedGenre } = event.target;

    const queryParams = new URLSearchParams(searchParams?.toString());

    if (selectedGenre !== 'all') {
      queryParams.set('genre', selectedGenre);
    } else {
      queryParams.delete('genre');
    }

    const safePathname = pathname || '/';
    const url = queryParams.toString()
      ? `${safePathname}?${queryParams}`
      : safePathname;

    router.push(url);
  };

  return (
    <div className="custom-container flex flex-col py-12 gap-12">
      <h1 className="font-bold text-4xl">Top Sellers</h1>
      <div className="flex items-center justify-end gap-6">
        <p>Genre</p>
        <span>|</span>
        <select
          value={searchParams?.get('genre') || 'all'}
          onChange={handleGenreChange}
          className="text-gray-700 border rounded-md p-1"
        >
          <option value="all">All</option>
          {availableFilters.map((option) => (
            <option
              key={option.toLocaleLowerCase()}
              value={option.toLocaleLowerCase()}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CatalogHeader;
