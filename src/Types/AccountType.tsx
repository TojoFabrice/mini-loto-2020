export interface AccountServiceLoginParams {
    url: string;
    data: AccountServiceLoginDataParams;
}

export interface AccountServiceRegisterParams {
    url: string;
    data: AccountServiceRegisterDataParams;
}

export interface AccountServiceGetParams {
    url: string;
    data: {};
}

export interface AccountServiceLoginDataParams {
    username: string;
    password: string;
}

export interface AccountServiceRegisterDataParams {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    isEnabled: boolean;
}

export interface AccountServiceSendEmailOptionsDataParams {
    cc: string,
    bcc: string
  }

export interface AccountServiceSendEmailParams {
  to: string,
  object: string,
  subject: string,
  body: string,
  options: AccountServiceSendEmailOptionsDataParams
}

export interface AccountServiceResetPasswordParams {
    password: string;
}

export interface AccountServiceResetParams {
    url: string;
    data: AccountServiceResetPasswordParams;
}

export interface AccountServiceAnyDataParams {
    url: string;
    data: any;
}