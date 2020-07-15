import axios from 'axios';
import { CONSTANT } from '../env';
import store from '../store';
import { HttpDataParams } from '../types/HttpType';
import { getToken } from './store/reducers/AccountsReducerService';

class Http {
  axios = () => {
    const state = store.getState();
    const token = getToken(state) || null;
    const AuthStr = 'Bearer '.concat(token);
    return axios.create({
      baseURL: CONSTANT.API.HOST,
      headers: { Authorization: AuthStr },
    });
  };

  get = async (params: HttpDataParams) => {
    try {
      return await this.axios().get(params.url, params.data);
    } catch (error) {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log('//----------------- ERROR RESPONSE ----------------//');
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log('//------------------ ERROR REQUEST ----------------//');
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('//---------------------- ERROR --------------------//');
        console.log('Error', error.message);
      }
      console.log(error);
      return null;
    }
  };

  post = async (params: HttpDataParams) => {
    try {
      return await this.axios().post(params.url, params.data);
    } catch (error) {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log('//----------------- ERROR RESPONSE ----------------//');
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log('//------------------ ERROR REQUEST ----------------//');
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('//---------------------- ERROR --------------------//');
        console.log('Error', error.message);
      }
      console.log(error);
      return null;
    }
  };

  put = async (params: HttpDataParams) => {
    try {
      return await this.axios().put(params.url, params.data);
    } catch (e) {
      return null;
    }
  };

  delete = async (params: HttpDataParams) => {
    try {
      return await this.axios().delete(params.url, params.data);
    } catch (e) {
      return null;
    }
  };
}

export default new Http();
