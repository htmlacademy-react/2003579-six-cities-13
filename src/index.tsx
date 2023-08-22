import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
//import { generatedListOffers } from './mocks/generated-list-offers';
//import { generatedListOffersAll } from './mocks/general-offers-list-all';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { citiesArr } from './const';
import { fetchOffersAction, checkAuthAction } from './store/api-actions';

store.dispatch(fetchOffersAction);
store.dispatch(checkAuthAction);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App /*offersData={generatedListOffers} offersList={generatedListOffersAll}*/ cities={citiesArr} />
    </Provider>
  </React.StrictMode>
);
