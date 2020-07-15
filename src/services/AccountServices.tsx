import Http from "./Http";
import { 
    AccountServiceLoginParams, 
    AccountServiceRegisterParams,
    AccountServiceSendEmailParams,
    AccountServiceResetParams,
    AccountServiceGetParams
 } from "../types/AccountType";
import { sendEmail } from "./Utils";

class AccountServices {
    login = async (params: AccountServiceLoginParams) => await Http.post(params);
    register = async(params: AccountServiceRegisterParams) => await Http.post(params);
    forgotPassword = async(params: AccountServiceSendEmailParams) => await sendEmail(params);
    resetPassword = async(params: AccountServiceResetParams) => await Http.post(params);
    get = async(params: AccountServiceGetParams) => await Http.get(params);
}

export default new AccountServices();