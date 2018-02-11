/**
 * Created by linwei on 2017/10/17.
 */
import {SET_DEFAULT_DATE,SET_DATE_VALUE,DROP_DOWN,VISIBILITY_DATE} from '../actions/actions';
import moment from 'moment';
moment.locale('zh-cn');

export let dateValue = (state = [
  moment().subtract(1, 'days').format('YYYYMMDD'),moment().format('YYYYMMDD')
],action)=>{
    switch (action.type){
      case SET_DATE_VALUE:
        return action.text;
      default:
        return state
    }
};

export let timeDate = (state = moment().subtract(1, 'days').format('YYYYMMDD'),action)=>{
  switch (action.type){
    case SET_DEFAULT_DATE:
      return action.text;
    default:
      return state;
  }
};

export let dropDown = (state = '',action)=>{
  switch (action.type){
    case DROP_DOWN:
      return action.text;
    default:
      return state;
  }
};

export let visibleDate = (state = false,action)=>{
  switch (action.type){
    case VISIBILITY_DATE:
      return action.text;
    default:
      return state;
  }
};
