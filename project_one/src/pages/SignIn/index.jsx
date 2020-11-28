import React from 'react';
import logo from '../../assets/logo.png';
// Selector para pegar uma info da Store e Dispatch para enviar uma info
import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

import './index.css';

const SignIn = () => {
  const { loadingSignInRequest } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log('LOADING: ', loadingSignInRequest);

  return (
    <div className="sign-in-page">
      <img src={logo} alt="CL Logo" />
      <input type="text" defaultValue="haryel.dev@gmail.com" />
      <input type="password" defaultValue="123456" />
      <button onClick={() => dispatch(signInRequest({ email: 'haryel.dev@gmail.com', password: '123456' }))}>
        { loadingSignInRequest ? 'Carregando' : 'Entrar' }
      </button>
    </div>
  );
}

export default SignIn;