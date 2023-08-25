import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserMenu(): JSX.Element {

  const dispatch = useAppDispatch();
  const favoritesCount = useAppSelector((state) => state.favoritesList).length;
  const userMail = useAppSelector((state) => state.userMail);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{userMail}</span>
            <span className="header__favorite-count">{favoritesCount}</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#" onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          >
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default UserMenu;
