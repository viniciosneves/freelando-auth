import axios from "axios";
import { AmazenadorToken } from "../autenticacao/AmazenadorToken";

const routesToScape = [
  '/auth/refresh',
  '/auth/login'
]

export const http = axios.create({
  baseURL: 'http://localhost:8080/',
});

http.interceptors.request.use(function (config) {
  const accessToken = AmazenadorToken.accessToken
  if (!routesToScape.includes(config.url) && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

const lidarComErro401 = async (error) => {
  const originalRequest = error.config;  if (!originalRequest._retry) {
    originalRequest._retry = true;

    const refreshToken = AmazenadorToken.refreshToken;

    if (!refreshToken) {
      
      return Promise.reject({
        erro: 'Refresh token inexistente'
      })
    }

    await http.get('/auth/refresh', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }).catch(error => {
      AmazenadorToken.limpar()
      return Promise.reject(error)
    })
      .then(resposta => {
        AmazenadorToken.definirTokens(resposta.data.access_token, resposta.data.refresh_token);
      });
    return http(originalRequest);
  }

}

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!routesToScape.includes(error.config.url) && error.response.status === 401) {
      return lidarComErro401(error)
        .catch(() => window.location.href = '/');
    }
    return Promise.reject(error);
  }
);