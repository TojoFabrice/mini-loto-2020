import jwtDecode from "jwt-decode";

import AccountServices from "../services/AccountServices";
import {
  setTokenState,
  setLoadingState,
  setCurrentUserState,
  setRefreshTokenState,
} from "../store/actions/Account";
import {
  AccountServiceLoginDataParams,
  AccountServiceRegisterDataParams,
  AccountServiceResetPasswordParams,
} from "../types/AccountType";

import store from "../store";
import { apiGet, apiPost } from "../services/api";
import { database_store, database_query } from "../services/database";
import { encode } from "punycode";

const dispatch = store.dispatch;

/**
 * Authentification login
 * @param params
 * @returns {boolean}
 */
const authentificationLogin = async (params: AccountServiceLoginDataParams) => {
  dispatch(setLoadingState(true));
  const response = await apiPost("/login_check", params, { token: "" });

  if (response && response.status === 200) {
    const isCurrentUser = await setCurrentUser(response.data.token);
    if (isCurrentUser) {
      dispatch(setTokenState(response.data.token));
      dispatch(setRefreshTokenState(response.data.refresh_token));

      await database_store({
        token: response.data.token,
        refresh_token: response.data.refresh_token,
      });
      return true;
    }
  }

  dispatch(setLoadingState(false));
  return false;
};

const authentificationRegister = async (
  params: AccountServiceRegisterDataParams
) => {
  dispatch(setLoadingState(true));
  const currentUser = await apiPost(
    "/users",
    { ...params, isEnabled: true },
    { token: "" }
  );

  if (currentUser) {
    const credentials = { username: params.email, password: params.password };
    return await authentificationLogin(credentials);
  } else {
    dispatch(setLoadingState(false));
    return false;
  }
};

const authentificationResetPassword = async (
  params: AccountServiceResetPasswordParams
) => {
  const response = await AccountServices.resetPassword({
    url: "xxxx",
    data: params,
  });
  return response;
};

const authentificationForgotPassword = async (email: string) => {
  const data = {
    to: email,
    subject: "envoi email",
    object: "code de confirmation",
    body: "votre code confirmation est : 1234",
    options: {
      cc: "irintsoa@outlook.com",
      bcc: "irintsoa@outlook.com",
    },
  };
  return await AccountServices.forgotPassword(data);
};

/**
 * If already connected
 * set Token from local storage
 * set CurrentUser to local storage
 * @returns {boolean}
 */
const isAuthenticated = async () => {
  const token = await database_query("token");
  if (token) {
    const { exp: expiration } = jwtDecode(token);
    if (expiration * 1000 > new Date().getTime()) {
      dispatch(setTokenState(token));
      await setCurrentUser(token);
      return true;
    }
    return false;
  }
  return false;
};

/**
 * set Current user from token
 * @param token
 * @returns {boolean}
 */
const setCurrentUser = async (token: string) => {
  const { username } = jwtDecode(token);

  const res = await apiGet(`/users?email=${encodeURIComponent(username)}`, {
    token,
  });

  if (res && res.length > 0) {
    dispatch(setCurrentUserState(res[0]));
    await database_store({ currentUser: res[0] });
    return true;
  }

  return false;
};

export {
  authentificationLogin,
  authentificationRegister,
  authentificationForgotPassword,
  authentificationResetPassword,
  isAuthenticated,
  setCurrentUser,
};
