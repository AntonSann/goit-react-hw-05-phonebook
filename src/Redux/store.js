import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer,   
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE, 
    REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './Contacts/contacts-reducer'; 
import logger from 'redux-logger';



/* const rootReducer = combineReducers({
  contacts: contactsReducer,
}); */

const middleware = [...getDefaultMiddleware({serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }}), logger];

  const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
  }

  const store = configureStore({
    reducer: {contacts: persistReducer(contactsPersistConfig, contactsReducer)},
    devTools: process.env.NODE_ENV === 'development',
    middleware
});

/* const store = createStore(rootReducer, composeWithDevTools()); */

const persistor = persistStore(store);

export default {store, persistor};