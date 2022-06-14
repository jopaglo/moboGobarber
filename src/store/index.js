import { persistStore } from 'redux-persist'; // vai armazenar dados no storage do navegador para autenticacao

import createSagaMiddleware from 'redux-saga'; // eu crio o middleware saga para monitoramento;
import createStore from './createStore'; // importo a criacao da minha store que esta no outro arquivo
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer'; // importo as minhas centrais de reducer
import rootSaga from './modules/rootSaga'; // importo as minhas centrais de saga

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null; // monitoramento do saga em ambiente de desenvolvimento via reactotron

const sagaMiddleware = createSagaMiddleware({ sagaMonitor }); // essa variavel armazena a criação/instancia do sagamiddleware

const middlewares = [sagaMiddleware]; // essa variavel recebe a criação do saga

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga); // boto esses sagas pra rodar, ouvir e executar

export { store, persistor };
// em todos os lugares que eu exportar o store precisa ser entre chaves agora pq ele nao é default
