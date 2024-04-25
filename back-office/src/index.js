import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Router from './router/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <PrimeReactProvider>
    <Provider store={store}>
      <Router />
    </Provider>
    </PrimeReactProvider>
  // </React.StrictMode>
);

