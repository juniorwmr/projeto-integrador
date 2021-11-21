import jwt from 'jsonwebtoken';

export const TOKEN_KEY = 'token';
export const isAuthenticated = (): boolean =>
  localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = (): string | null => localStorage.getItem(TOKEN_KEY);
export const login = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

interface IDecodeJWToken {
  email: string;
  exp: number;
  iat: number;
  id: number;
  name: string;
}

export const jwtDecoded = (token: string): jwt.JwtPayload => {
  return jwt.decode(token) as IDecodeJWToken;
};

export const isTokenExpired = (): boolean => {
  const token = getToken();
  if (!token) {
    return true;
  }
  const { exp } = jwtDecoded(token);
  if (exp && Date.now() >= exp * 1000) {
    return true;
  }
  return false;
};
