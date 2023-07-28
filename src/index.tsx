import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { generatedListOffers } from './mocks/generated-list-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersData={generatedListOffers} />
  </React.StrictMode>
);
