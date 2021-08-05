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
import phoneBookReducer from '../redux/phoneBook/phoneBook-reducer';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contects',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, phoneBookReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistior = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistior };
