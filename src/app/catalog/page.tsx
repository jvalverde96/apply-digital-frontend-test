import GameList from '@/components/catalog/game-list';
import CatalogHeader from '@/components/catalog/header';
import Wrapper from '@/components/shared/wrapper';
import { Suspense } from 'react';

const Catalog = () => {
  return (
    <Suspense>
      <Wrapper>
        <CatalogHeader />
        <div className="border  !p-0 !m-0"></div>
        <GameList />
      </Wrapper>
    </Suspense>
  );
};

export default Catalog;
