import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      </PersistGate>
    </Provider>
  );
}

/*
provider vai prover as actions e estados para a aplicacao
o persistgate nao vai deixar renderizar antes de ver se ele já esta logado
*/
