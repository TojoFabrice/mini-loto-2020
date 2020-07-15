import { getData } from "../../Utils";

export function getUserPlays(state: any, errorIfNotFound = false) {
  return getData(
    state,
    "UserPlay.userPlays",
    errorIfNotFound && "Not userPlays found"
  );
}

export function getCurrentUserPlay(state: any, errorIfNotFound = false) {
  return getData(
    state,
    "UserPlay.currentUserPlay",
    errorIfNotFound && "No userPlay draw found"
  );
}

export function getSixNumbers(state: any, errorIfNotFound = false) {
  return getData(
    state,
    "UserPlay.sixNumbers",
    errorIfNotFound && "No sixNumbers found"
  );
}

export function getLastUserPlays(state: any, errorIfNotFound = false) {
  return getData(
    state,
    "UserPlay.lastUserPlays",
    errorIfNotFound && "No UserPlays found"
  );
}

export function getButtonLoading(state: any, errorIfNotFound = false) {
  return getData(
    state,
    "UserPlay.loadingButton",
    errorIfNotFound && "No loadingButton found"
  );
}
