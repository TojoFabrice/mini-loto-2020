import Http from "./Http";
import {
  UserPlayServiceDataNull,
  UserPlayServiceParams,
} from "../types/UserPlayType";

class UserPlayService {
  get = async (params: UserPlayServiceDataNull) => await Http.get(params);
  post = async (params: UserPlayServiceParams) => await Http.post(params);
}

export default new UserPlayService();