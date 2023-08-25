import EntryPoint from '../entry-point/entry-point';
import UserMenu from '../user-menu/user-menu';
import Logo from '../logo/logo';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

function PageHeader(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {authStatus === AuthorizationStatus.Auth ? <UserMenu /> : <EntryPoint />}
        </div>
      </div>
    </header>

  );
}

export default PageHeader;
