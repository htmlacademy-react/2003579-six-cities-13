import { Helmet } from 'react-helmet-async';
import FavoritesEmptyPage from './favorites-empty-page';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { fetchFavoritesListAction } from '../../store/api-actions';
import FavoritesList from '../../components/favorites-list/favorites-list';
import PageHeader from '../../components/page-header/page-header';


function FavoritesPage(): JSX.Element {

  store.dispatch(fetchFavoritesListAction());
  const favoritesList = useAppSelector((state) => state.favoritesList);

  if(favoritesList.length === 0) {
    return (
      <FavoritesEmptyPage />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <PageHeader />
      <main className="page__main page__main--favorites">
        <FavoritesList offersList={favoritesList}/>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
