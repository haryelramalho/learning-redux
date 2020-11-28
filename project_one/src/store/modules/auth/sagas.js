import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import api from '../../../services/api';

// Generators
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    // Promise ou generators são resolvidos com call()
    const { data } = yield call(api.post, '', {
      email,
      password
    });

    yield put(actions.signInSuccess({ token: data.session_token }));
  } catch (err) {
    yield put(actions.signInFailure());
  }
}

// Exportando e ouvindo a action de SignIn
export default all([
  // A partir do momento que a action SIGN_IN_REQUEST for chamada
  // O meu saga tem começar o seu fluxo alternativo
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);

/**
 * TakeLatest ignora algumas actions caso sejam feitas muitas requisições
 * O takeEvery escuta todas as actions, espera terminar uma e pega a próxima. 
 */