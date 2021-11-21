import jwt from 'jsonwebtoken';

export const isAuthenticated = (keyName: string): boolean =>
  localStorage.getItem(keyName) !== null;
export const getToken = (keyName: string): string | null =>
  localStorage.getItem(keyName);
export const login = (token: string, keyName: string): void => {
  localStorage.setItem(keyName, token);
};
export const logout = (keyName: string): void => {
  localStorage.removeItem(keyName);
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

export const isTokenExpired = (keyName: string): boolean => {
  const token = getToken(keyName);
  if (!token) {
    return true;
  }
  const { exp } = jwtDecoded(token);
  if (exp && Date.now() >= exp * 1000) {
    return true;
  }
  return false;
};
