/**
 * Created by linwei on 2017/12/21.
 */
import React, {Component} from 'react';
import styles from './index.module.css';
import Login from './Login/Login';
export default class index extends Component {


    render() {
        return (
            <div>
                <div className={styles.bg}>

                </div>
                <div className={styles.container}>

                    <Login {...this.props}/>
                </div>
            </div>

        );
    }
}
index.defaultProps = {};