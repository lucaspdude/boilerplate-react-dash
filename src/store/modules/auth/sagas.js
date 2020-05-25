import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { signInSucess, signFailure, resetSucess, resetFailure } from './actions';

import produce from 'immer';




export function* signIn({ payload }) {
    try {
        const { email, password } = payload;
        const response = yield call(api.post, 'login', { email, password });
        const token = response.data.token
        const user = response.data.usuario
        const estabelecimento = response.data.estabelecimento
        const roles = user.roles
          api.defaults.headers.Authorization = `Bearer ${token}`;
          const roleName = roles.map(role => role.name)

          switch(roleName[0]){
            case 'Estabelecimento': {
              toast.error("Usuário sem permissões")
              yield put(signFailure());
              break;
            }
            case 'Super Administrador': {
              yield put(signInSucess(token, user));
              history.push('/dashboard');
              break;
            }
            case 'Administrador': {
              yield put(signInSucess(token, user));
              history.push('/dashboard');
              break;
            }

            default:
              console.log('default')
          }

  

    } catch (err) {
        const errorMessage = err.response.data.erro;
        toast.error(errorMessage);

        yield put(signFailure());
    }
}

export function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;
        yield call(api.post, '/users', {
            name,
            email,
            password,
            provider: true,
        });
        toast.success('Conta criada com Sucesso, Faça Login');
        history.push('/');
    } catch (err) {
        toast.error('Falha na criação, verifique seus dados');
        yield put(signFailure());
    }
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    history.push('/');
}




// Reset password

export function* resetPassword({ payload }) {
  try {
      const response = yield call(api.post, '/criareset', payload.data)
        toast.success(response.data.mensagem)
        yield put(resetSucess(response.data.token))
  } catch (err) {
    toast.error(err.response.data.mensagem);
    yield put(resetFailure());

  }
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGNOUT', signOut),
    takeLatest('@auth/RESET_REQUEST', resetPassword),
]);
