/**
 * Created by linwei on 2017/11/29.
 */
//所有进入主列表的登陆进行权限验证
export const requireAuth = async (nextState, replace) => {
  let user = window.localStorage.getItem('userId');
  // if(!window.doLogin ){
  //   replace({pathname:'/'});
  //   let json = await postFetch(LoginUrl, {
  //     username,
  //     password:window.localStorage.getItem('psw')
  //   });
  //
  //   if(json.code !== 200){
  //     console.log("连接跳转")
  //
  //     window.localStorage.removeItem('userId');
  //     window.localStorage.removeItem('username');
  //   }
  //   else{
  //     window.doLogin = true;
  //   }
  // }
  // else if(!username){
  //   replace({pathname:'/'});
  // }
  if (!user) {
    replace({pathname: '/'});
  }

};

//进入登陆界面的时候进行权限验证
export const requireLogin = (nextState, replace) => {
  let user = window.localStorage.getItem('userId');
  if (user) {
    if (window.localStorage.getItem('powerType') === "2") {
      replace({pathname: '/disStair'});
    }
    else {
      replace({pathname: '/disTwo'});
    }

  }
};
