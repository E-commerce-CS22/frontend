import { authKey, branchesKey, isNotificationActiveKey, userKey } from "./constant";

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
  return !ISSERVER && localStorage.getItem(authKey);
}
export function setUser(user: any): void {
  !ISSERVER && localStorage.setItem(userKey, JSON.stringify(user));
}
export function removeUser(): void {
  !ISSERVER && localStorage.removeItem(userKey);
}
export function getUser(): any {
  return !ISSERVER && JSON.parse(localStorage.getItem(userKey));
}
export function setBranches(branches: any): void {
  !ISSERVER && localStorage.setItem(branchesKey, JSON.stringify(branches));
}
export function removeBranches(): void {
  !ISSERVER && localStorage.removeItem(branchesKey);
}
export function getBranches(): any {
  return !ISSERVER && JSON.parse(localStorage.getItem(branchesKey));
}
export function setIsNotificationActiveKey(isActive: boolean): void {
  !ISSERVER && localStorage.setItem(isNotificationActiveKey, String(isActive));
}
export function getIsNotificationActiveKey(): any {
  return !ISSERVER && localStorage.getItem(isNotificationActiveKey) === "true";
}
