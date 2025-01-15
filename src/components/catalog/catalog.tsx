import CatalogHeader from './header';
import GameList from './game-list';

const Catalog = () => {
  return (
    <div>
      <CatalogHeader />
      <div className="border"></div>
      <GameList />
    </div>
  );
};

export default Catalog;
