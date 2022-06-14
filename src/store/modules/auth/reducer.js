import produce from 'immer';
import { Alert } from 'react-native';

const INITIAL_STATE = {
  token: null,
  loged: false,
  loading: false,
};

function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_REQUEST':
      return produce(state, (draft) => {
        draft.loading = true; // eu crio esse apenas pra deixar rodando o loading
      });
    case '@auth/LOGIN_SUCCESS':
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.loged = true;
        draft.loading = false;
        Alert.alert('AVISO!', 'Acesso liberado! Seja bem vindo!');
      });

    /* os dados do usuário eu vou armazenar em outro reducer (dados pessoais e avatar), aqui eu vou armazenar
    apenas a informação se ele está logado ou não e controlar o loading */

    case '@auth/LOGIN_AND_REGISTER_FAILURE':
      return produce(state, (draft) => {
        draft.loged = false;
        draft.loading = false;
        Alert.alert(
          'AVISO!',
          'Acesso NÃO liberado! Os dados informados são inválidos!'
        );
      });

    case '@auth/LOGOUT':
      return produce(state, (draft) => {
        draft.loged = false;
        draft.token = null;
        Alert.alert('AVISO!', 'Você foi desconectado da aplicação!');
      });

    default:
      return state; // retorna o estado sem nenhuma alteracao
  }
}

export default auth;
