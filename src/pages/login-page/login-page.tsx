import { Helmet } from 'react-helmet-async';
import { useRef} from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AppRoute } from '../../const';
import Logo from '../../components/logo/logo';
import { AuthData } from '../../types/auth-data';
import { AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';

function LoginPage(): JSX.Element {

  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  if(authStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  //const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as AuthData;
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction(data));
    }
  }

  //function validateMail(/*mailInputField: HTMLInputElement*/) {
  /*if(inputField.current?.match(emailPattern)) {
      inputField.setCustomValidity('');
    } else {
      inputField.setCustomValidity('Введите e-mail по форме xxxx@xxxx.xx');
    }*/
  //}

  //function validatePassword(/*passwordInputField: HTMLInputElement*/) {
  //  if(passwordRef.current === null) {
  //    passwordRef.setCustomValidity('Введите пароль');
  //  }
  //}

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
