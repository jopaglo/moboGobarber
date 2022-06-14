import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    /* so vou pegar a senha se ele realmente for alterar e para isso vou usar o
    metodo object.assign que serve pra unir 2 objetos */

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };


    const response = yield call(api.put, 'users', profile);

    Alert.alert('Aviso!', 'Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert('Aviso!', 'Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
