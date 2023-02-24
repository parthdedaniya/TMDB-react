import { ProgressLoader } from './components/common';
import configureStore from './redux/store/configureStore';
import './styles/style.scss';
import 'normalize.css/normalize.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';
import WebFont from 'webfontloader';
import AppRouter from './App';

WebFont.load({
  google: {
    families: ['Yantramanav: 400, 700'],
  },
});

const { store, persistor } = configureStore();

render(
  React.createElement(Provider, { store: store }, 
    React.createElement(PersistGate, { loading: React.createElement(ProgressLoader, null), persistor: persistor },
      React.createElement(AppRouter, null)
    )
  ),
  document.getElementById('root')
);
