import React,{Component} from 'react';
import styles from './Login.module.css';
import {HeaderName} from '../../config';
import { Button, Row, Form, Input ,message } from 'antd'
import {postFetch} from '../../../../utils/request';
import {LoginUrl} from '../../../../actions/userService';
const FormItem = Form.Item;



class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:''
    };
    console.log(this.props);
  }
  goPage(){
    this.props.form.validateFields((err,values)=>{this.login(err,values)});

  }
  handleKeyDown(e){
    if(e.keyCode === 13){
      this.props.form.validateFields((err,values)=>{this.login(err,values)});
    }
  }
  async login(err,values){
    let username = values.username.trim();
    let password = values.password;
    if(!err) {
      let json = await postFetch(LoginUrl, {
        username,
        password
      });
      if (json.code === 200) {
        window.localStorage.setItem('gameId', 0);
        window.localStorage.setItem('userId', json.info.id);
        window.localStorage.setItem('token', json.info.token);
        window.localStorage.setItem('username',username);
        window.localStorage.setItem('powerType',json.info.powerType);
        window.localStorage.setItem('openKey','1');
        if(json.info.powerType === '1'){
          this.props.history.push('/management');
          console.log(this.props);
        }
        else{
          this.props.history.push('/select');
        }


      }
      else {
        message.error('账号或密码错误，请重新确认.');
      }
    }
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return(
        <div className={styles.form} onKeyDown={e=>{this.handleKeyDown(e)}}>
          <div className={styles.logo}>
            {HeaderName}
          </div>
          <form>
            <FormItem hasFeedback>

              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入你的用户名' }]
              })(
                <Input size="large"  placeholder="用户名"/>
              )}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入你的密码' }]
              })(
                <Input size="large" type="password" placeholder="密码"/>
              )}
            </FormItem>
          </form>
          <Row>
            <Button type="primary" size="large" onClick={()=>{this.goPage()}} className={styles.btn}>
                登陆
            </Button>
            <p>

            </p>
          </Row>
        </div>
    )
  }
}
export default Form.create()(Login);
