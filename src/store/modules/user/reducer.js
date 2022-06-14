import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_SUCCESS': // estou ouvindo a action do outro modulo
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
      });

    case '@user/UPDATE_PROFILE_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.profile;
      });

    case '@auth/LOGOUT':
      return produce(state, (draft) => {
        draft.profile = null;
      });
    default:
      return state;
  }
}

export default user;
