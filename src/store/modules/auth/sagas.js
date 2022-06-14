import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loginSuccess, loginAndRegisterFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert('Aviso!', 'O usuário não pode ser um prestador de serviços');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token, user));
  } catch (error) {
    Alert.alert('Aviso!', 'Falha na autenticacao, verifique seus dados!');
    yield put(loginAndRegisterFailure());
  }
}

export function* register({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      provider: false,
    });

    Alert.alert(
      'Aviso!',
      'Cadastro realizado com sucesso! Utilize suas credenciais para acessar a plataforma!'
    );
  } catch (error) {
    Alert.alert('Aviso!', 'Falha no cadastro, verifique seus dados!');
    yield put(loginAndRegisterFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

// o all é pra eu ouvir todas as actions e suas respectivas novas chamadas
export default all([
  // para ele carregar o token eu posso fazer aqui no saga
  takeLatest('persist/REHYDRATE', setToken), // setando para guardar token com F5
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/REGISTER_REQUEST', register),
]);
