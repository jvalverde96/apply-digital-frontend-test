import GameList from '@/components/catalog/game-list';
import CatalogHeader from '@/components/catalog/header';

const Catalog = () => {
  return (
    <>
      <CatalogHeader />
      <div className="border"></div>
      <GameList />
    </>
  );
};

export default Catalog;
