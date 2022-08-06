import React from 'react';
import AxiosInstance from '../api/AxiosInstance';
import jwt_decode from 'jwt-decode';

const LoginService = async (email: string, senha: string) => {

  var tokenDecodificado: any = null;
  try {
    const resposta = await AxiosInstance.post('autenticacao', {
      email,
      senha,
    });

    if (resposta.status === 200) {
      tokenDecodificado = jwt_decode(resposta.data.token);
      tokenDecodificado['token'] = resposta.data.token;
      return tokenDecodificado;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
export { LoginService };
