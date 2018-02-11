/**
 * Created by linwei on 2017/10/17.
 */
import {combineReducers} from 'redux';
// import { routerReducer } from 'react-router-redux'
import {timeDate,dateValue,dropDown,visibleDate} from './LayoutReducer';
import {fetchData} from './DataReducer';
const reducers = {
  dateValue,
  timeDate,
  dropDown,
  fetchData,
  visibleDate
};

const combined = combineReducers({
  ...reducers,
  // routing: routerReducer
});

export default combined;
