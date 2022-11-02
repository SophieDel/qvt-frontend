import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import user from '../reducers/user';
import count from '../reducers/count';
import openedModalName from '../reducers/openedModalName';

const reducers = combineReducers({ user, count, openedModalName });
const persistConfig = { key: 'qvtstore', storage };


const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});


const persistor = persistStore(store);



function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <>
        <Head>
          <title>QVT</title>
        </Head>
        <Component {...pageProps} />
      </>
    </PersistGate>
    </Provider>
  );
}

export default App;
