import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';

type LoginCheckProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function LoginCheck(props: LoginCheckProps): JSX.Element {
  const { authorizationStatus, children } = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default LoginCheck;
