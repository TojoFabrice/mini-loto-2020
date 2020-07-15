import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import Account from './Account';
import LotteryDraw from './LotteryDraw';
import UserPlay from './UserPlay';

const reducers = { Account, LotteryDraw, UserPlay };

export const Reducer = combineReducers({ ...reducers, form: formReducer });