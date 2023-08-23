import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

type LoginCheckProps = {
  children: JSX.Element;
}

function LoginCheck(props: LoginCheckProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default LoginCheck;
