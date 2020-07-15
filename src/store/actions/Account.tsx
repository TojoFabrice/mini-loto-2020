function setLoggedState(isLogged: boolean) {
  return (dispatch: (arg0: { type: string; isLogged: boolean }) => void) => {
    dispatch({
      type: "SET_IS_LOGGED",
      isLogged,
    });
  };
}

function setLoadingState(loading: boolean) {
  return (dispatch: any) => {
    dispatch({
      type: "SET_LOADING",
      loading,
    });
  };
}

function setCurrentUserState(currentUser: object) {
  return (dispatch: (arg0: { type: string; currentUser: object }) => void) => {
    dispatch({
      type: "SET_CURRENT_USER",
      currentUser,
    });
  };
}

function setTokenState(token: string) {
  return (dispatch: (arg0: { type: string; token: string }) => void) => {
    dispatch({
      type: "SET_TOKEN",
      token,
    });
  };
}

function setRefreshTokenState(refreshToken: string) {
  return (
    dispatch: (arg0: { type: string; refreshToken: string }) => void,
    getState: any
  ) => {
    dispatch({
      type: "SET_REFRESH_TOKEN",
      refreshToken,
    });
  };
}

export {
  setLoadingState,
  setLoggedState,
  setCurrentUserState,
  setTokenState,
  setRefreshTokenState,
};
