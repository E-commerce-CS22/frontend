/* eslint-disable @typescript-eslint/no-unused-expressions */
import { authKey, userKey } from "./constant";

const ISSERVER = typeof window === "undefined";

export function setToken(token: string): void {
  !ISSERVER && localStorage.setItem(authKey, token);
}
export function removeToken(): void {
  !ISSERVER && localStorage.removeItem(authKey);
}
export function checkIsTokenSaved(): boolean {
  const token = (!ISSERVER && localStorage.getItem(authKey)) || "";
  return token.length > 0;
}
export function getToken(): string {
  return !ISSERVER ? localStorage.getItem(authKey) || "" : "";
}
export function setUser(user: object): void {
  !ISSERVER && localStorage.setItem(userKey, JSON.stringify(user));
}
export function removeUser(): void {
  !ISSERVER && localStorage.removeItem(userKey);
}
export function getUser(): object | null {
  const userData = !ISSERVER ? localStorage.getItem(userKey) : null;
  if (userData) {
    try {
      return JSON.parse(userData);
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
      return null;
    }
  }
  return null;
}
