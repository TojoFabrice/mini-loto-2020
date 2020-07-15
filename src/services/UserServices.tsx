import Http from "./Http";

class UserServices {
    getUserById = async (params: any ) => await Http.post(params);
    getUserEmail = async (params: any ) => await Http.get(params);
}

export default new UserServices();