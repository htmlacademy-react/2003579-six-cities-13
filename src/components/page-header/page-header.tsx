import EntryPoint from '../entry-point/entry-point';
import UserMenu from '../user-menu/user-menu';
import Logo from '../logo/logo';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';

function PageHeader(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);

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
