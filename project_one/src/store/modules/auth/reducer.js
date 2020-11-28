// Boa prática: definindo o estado inicial dos dados do módulo
const initialState = {
  loadingSignInRequest: false,
  isSignedIn: false,
  error: false,
}

/**
 * Sempre que é feito o dispatcher, todos os reducers da aplicação são chamados, 
 * Por isso devemos verificar qual tipo da action
 * No caso desse reducer, ele estará escutando os tipos da action de autenticação
 */
export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      // Tudo o que é retornado fica salvo na store
      return {
        ...state, // Valor atual da aplicação (cópia do estado atual), isso é feito para não perder os outros dados
        loadingSignInRequest: true,
      }
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loadingSignInRequest: false,
        isSignedIn: true
      }
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
}
