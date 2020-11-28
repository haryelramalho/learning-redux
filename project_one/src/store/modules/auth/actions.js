export function signInRequest({ email, password }) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password
    }
  }
}

export function signInSuccess({ token }) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      token,
    }
  }
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  }
}