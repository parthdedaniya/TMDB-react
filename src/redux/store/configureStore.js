import reducers from '../reducers';
import rootSaga from '../sagas/rootSaga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (process.env.VITE_NODE_ENV !== "prod" &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const storageName = 'movx-v2';

const config = {
  key: storageName,
  storage,
  whitelist: ['misc', 'search', 'filters', 'genre', 'favorites'],
};

const persistedReducer = persistReducer(config, combineReducers(reducers));

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};
