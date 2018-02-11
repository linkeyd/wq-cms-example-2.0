  /**
 * Created by linwei on 2017/10/18.
 */
import {RECEIVE_POSTS,REQUEST_POSTS} from '../actions/actions';

let getData = (state = {
  loading:false,
  dataSource:[]
},action)=>{
  switch (action.type){
    case REQUEST_POSTS:
      return Object.assign({},state,{
        loading:true,
        total:1
      });
    case RECEIVE_POSTS:
      return Object.assign({},state,{
        loading:false,
        dataSource:action.data.info.dataSource,
        total:action.data.info.total
      });
    default:
      return state;

  }
};

export let fetchData = (state = {
  purchase:{
    dataSource:[],
    loading:false,
    total:0
  },
  buyData:{
    dataSource:[],
    loading:false,
    total:0
  },
  roomMessage:{
    dataSource:[],
    loading:false,
    total:0
  }
},action)=>{
    switch (action.type){
      case REQUEST_POSTS:
      case RECEIVE_POSTS:
        return Object.assign({},state,{
          [action.key] : getData(state[action.key],action)
        });
      default:
        return state;
    }
};
