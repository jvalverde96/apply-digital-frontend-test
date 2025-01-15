import { availableFilters } from '@/utils/endpoint';
import React from 'react';

const CatalogHeader = () => {
  return (
    <div className="custom-container flex flex-col py-12 gap-12">
      <h1 className="font-bold text-4xl">Top Sellers</h1>
      <div className="flex items-center justify-end gap-6">
        <p>Genre</p>
        <span>|</span>
        <select className="text-gray-700 border rounded-md p-1">
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
