import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { generatedListOffers } from './mocks/generated-list-offers';
import { generatedListOffersAll } from './mocks/general-offers-list-all';
import { mockCity } from './mocks/mock-city';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersData={generatedListOffers} offersList={generatedListOffersAll} city={mockCity}/>
  </React.StrictMode>
);
