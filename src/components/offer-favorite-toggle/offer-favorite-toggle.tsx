import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { FavoritesToggleRole } from '../../const';
import { changeBriefOfferFavoriteStatusAction, changeDetailedOfferFavoriteStatusAction } from '../../store/api-actions';
import { FavoriteStatus } from '../../const';
import { Navigate } from 'react-router-dom';


type OfferFavoriteToggleProps = {
  offerId: string,
  isFavorite: boolean,
  role: FavoritesToggleRole,
}

function OfferFavoriteToggle({ offerId, isFavorite, role }: OfferFavoriteToggleProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const isFavoriteNumericStatus: FavoriteStatus = isFavorite ? 1 : 0;

  const handleFavoriteToggleClick = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      //return <Navigate to={AppRoute.Login} />;
    }
    if (role === FavoritesToggleRole.DetailedOfferFavoriteToggle) {
      dispatch(changeDetailedOfferFavoriteStatusAction({ offerId, isFavoriteNumericStatus }));
    } else {
      dispatch(changeBriefOfferFavoriteStatusAction({ offerId, isFavoriteNumericStatus }));
    }
  };

  return (
    <button className={cn(
      'button',
      { 'place-card__bookmark-button': role === FavoritesToggleRole.DetailedOfferFavoriteToggle },
      { 'place-card__bookmark-button--active': isFavorite && role === FavoritesToggleRole.DetailedOfferFavoriteToggle },
      { 'offer__bookmark-button': role === FavoritesToggleRole.OffersListFavoriteToggle },
      { 'offer__bookmark-button--active': isFavorite && role === FavoritesToggleRole.OffersListFavoriteToggle },
    )}
     type="button" onClick={handleFavoriteToggleClick}>
      <svg className="offer__bookmark-icon" width={31} height={33}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default OfferFavoriteToggle;
