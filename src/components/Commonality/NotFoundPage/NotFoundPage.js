/**
 * Created by linwei on 2017/9/11.
 */
import React, {Component} from 'react';
import styles from './NotFoundPage.module.css';
import {Button} from 'antd';
export default class NotFoundPage extends Component {

    backPage(){
      this.props.history.push("/")
    }
    render() {
        return (
            <div className={styles.container}>
              <div className={styles.page}>
                <img src={require('./404.png')} className={styles.images} />
              </div>
              <div className={styles.text}>
                <div>矮油~~您访问的页面不在地球上...</div>
                <div><Button type="primary" size="large" onClick={()=>{this.backPage()}}>返回首页</Button></div>
              </div>
            </div>
        );
    }
}
NotFoundPage.defaultProps = {};
