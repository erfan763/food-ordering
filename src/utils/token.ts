import Cookie from "js-cookie";

export const tokenKey = "user_token";

export function getToken() {
  const token = Cookie.get(tokenKey);
  return token;
}

export function setToken(token: string) {
  Cookie.set(tokenKey, token);
}

export function removeToken() {
  Cookie.remove(tokenKey);
}
