import { getData } from "../../Utils";

//------------------------------------------------------------------//
//--------------------------- Selectors ----------------------------//
//------------------------------------------------------------------//
export function getIsLogged(state: any, errorIfNotFound = false) {
  return getData(
    state,
    'Account.isLogged',
    errorIfNotFound && 'No is Logged data found'
  );
}
export function getLoading(state: any, errorIfNotFound = false) {
  return getData(
    state,
    'Account.loading',
    errorIfNotFound && 'No is Logged data found'
  );
}
export function getCurrentUser(state: any, errorIfNotFound = false) {
  return getData(
    state,
    'Account.currentUser',
    errorIfNotFound && 'No currentUser data found'
  );
}
export function getToken(state: any, errorIfNotFound = false) {
  return getData(
    state,
    'Account.token',
    errorIfNotFound && 'No token data found'
  );
}
export function getRefreshToken(state: any, errorIfNotFound = false) {
  return getData(
    state,
    'Account.refreshToken',
    errorIfNotFound && 'No refreshToken data found'
  );
}