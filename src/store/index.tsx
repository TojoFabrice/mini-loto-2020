import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Reducer } from './reducers/index';
import { CONSTANT } from '../env'

//-------------------------------------------------------------//
//-------------------- Redux store config  --------------------//
//-------------------------------------------------------------//
const configureStore = (initialState = {}) => {
  const middlewares: any = [thunk, CONSTANT.NODE_ENV !== 'production' && logger].filter(
    Boolean
  );

  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(Reducer, initialState, enhancer);

  return store;
};
  
  const store = configureStore();

export default store;