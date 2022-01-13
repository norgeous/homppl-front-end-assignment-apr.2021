import { useDataContext } from '../../contexts/DataContext';
import SearchPage from '../../pages/SearchPage';
import FavouritedEventsPage from '../../pages/FavouritedEventsPage';

const Router = () => {
  const { page } = useDataContext();

  return (
    <>
      {page === 'SEARCH' && <SearchPage />}
      {page === 'FAVS' && <FavouritedEventsPage />}
    </>
  );
};

export default Router;
