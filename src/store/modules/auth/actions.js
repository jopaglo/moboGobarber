export function loginRequest(email, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { email, password },
  };
}

export function loginSuccess(token, user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { token, user },
  };
}

export function registerRequest(name, email, password) {
  return {
    type: '@auth/REGISTER_REQUEST',
    payload: { name, email, password },
  };
}

export function registerSuccess(name, email, password) {
  return {
    type: '@auth/REGISTER_SUCCESS',
    payload: { name, email, password },
  };
}

/* importante: essa action vai ser usada para o login e para o cadastro
eu nao recebo nenhuma informacao, apenas retorno o tipo */
export function loginAndRegisterFailure() {
  return {
    type: '@auth/LOGIN_AND_REGISTER_FAILURE',
  };
}

export function logout() {
  return {
    type: '@auth/LOGOUT',
  };
}
