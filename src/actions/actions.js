/**
 * Created by linwei on 2017/10/17.
 */

import {message} from 'antd';

import {postFetch} from '../utils/request';

export const DROP_DOWN = 'DROP_DOWN';

export const SET_DATE_VALUE = 'SET_DATE_VALUE';

export const SET_DEFAULT_DATE = 'SET_DEFAULT_DATE';

export const REQUEST_POSTS = 'REQUEST_POSTS ';

export const RECEIVE_POSTS = 'RECEIVE_POSTS ';


export const VISIBILITY_DATE = 'VISIBILITY_DATE';

export const ERROR_POST = 'ERROR_POST';
/**
 * 菜单栏下拉框数据
 * @param text
 * @returns {{type: string, text: *}}
 * @constructor
 */
export let DropDown = (text)=>{
  return{
    type:DROP_DOWN,
    text
  }
};
/**
 * 获取某一天的日期
 * @param text
 * @returns {{type: string, text: *}}
 * @constructor
 */
export let SetDateValue = (text)=>{
  return{
    type:SET_DATE_VALUE,
    text
  }
};
/**
 * 获取某一段时间
 * @param text
 * @returns {{type: string, text: *}}
 * @constructor
 */
export let SetDefaultDate = (text)=>{
  return{
    type:SET_DEFAULT_DATE,
    text
  }
};


/**
 * 是否显示时间
 * @param text
 * @returns {{type: string, text: *}}
 * @constructor
 */
export let SetVisibleDate = (text)=>{
  return{
    type:VISIBILITY_DATE,
    text
  }
};
/**
 * 开始请求
 * @param key
 * @param url
 * @returns {{type: string, key: *, url: *}}
 */
export let requestPosts = (key,url)=>{
  return{
    type:REQUEST_POSTS,
    key,
    url
  }
};
/**
 * 完成请求
 * @param key
 * @param url
 * @param data
 * @returns {{type: string, key: *, url: *, data: *}}
 */
export let receivePost = (key,url,data)=>{
  return{
    type:RECEIVE_POSTS,
    key,
    url,
    data
  }
};

export let errorPost = (key,url,data)=>{
  return{
    type:ERROR_POST,
    key,
    url,
    data
  }
};
//data key
//url 请求路径
//body 请求内容
export let fetchGet = (key,url,body)=>{
  return async dispatch => {
    dispatch(requestPosts(key,url));
    let json = await postFetch(url,body);
    if(json.code === 200){
      dispatch(receivePost(key,url,json));
    }
    else{
      message.error("获取数据失败")
    }
  }
};
