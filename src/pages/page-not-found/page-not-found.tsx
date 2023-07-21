import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './page-not-found.css';

function PageNotFound(): JSX.Element {
  return (
    <section className="not-found">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <div className="not-found__wrap">
        <h1 className="not-found__title">404 Page not found</h1>
        <Link className="not-found__link" to="/">Back to the main page</Link>
      </div>
    </section>
  );
}

export default PageNotFound;
