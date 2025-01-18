import GameList from '@/components/catalog/game-list';
import CatalogHeader from '@/components/catalog/header';
import Wrapper from '@/components/shared/wrapper';

const Catalog = () => {
  return (
    <Wrapper className="custom-container">
      <CatalogHeader />
      <div className="border"></div>
      <GameList />
    </Wrapper>
  );
};

export default Catalog;
