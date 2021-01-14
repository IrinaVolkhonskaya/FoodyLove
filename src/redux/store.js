import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from './reducers';
// import sessionReducer from './reducers/sessionReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]; //getDefaultMiddleware под капотом три прослойки (thunk, reduxDevTools, storeAPI)
// const enhancer = composeWithDevTools(middleware);

const menuPersistConfig = {
  key: 'menu',
  storage,
  whitelist:  ['cart','session'],
};

const persistedReducer = persistReducer(menuPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development', //использовать devtools только в разработке, в продакшене не нужны.
});

const persistor = persistStore(store);

export default { store, persistor };
