/**
 * Created by linwei on 2017/10/17.
 */
import {createStore,applyMiddleware} from 'redux';
import combined from '../reducers/combined';
//chrome redux插件监控
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();
//调用中间件
const middleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
);
let store = createStore(
  combined,
  composeWithDevTools(
    middleware
  )
);
export default store;
