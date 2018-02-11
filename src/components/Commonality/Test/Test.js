/**
 * Created by linwei on 2017/8/16.
 */
import React, {Component} from 'react';
import Count from './Count';
import styles from './test.css';
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input :'',
          count:''
        }
    }
    inputs(e){
      this.setState({
        input:e.target.value
      })
    }

    count(){
      console.log(this);
    }
    render() {
        return (
            <div className={styles.test}>
              <input type="text" onChange={e=>this.inputs(e)}/>
              <Count test={this.state.input} count={e=>this.count(e)}/>
            </div>
        );
    }
}
Test.defaultProps = {};
