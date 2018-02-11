/**
 * Created by linwei on 2017/8/16.
 */
import React, {Component} from 'react';

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state={
          count:''
        }
    }

    count(e){
      this.setState({
        count:e.target.value
      })
      this.props.count();
    }
    render() {
        return (
          <div>
            <input type="text" ref="text" onChange={e=>this.count(e)}/>
            <p>{this.props.test}</p>
            <p>{this.state.count}</p>
          </div>
        );
    }
}
Count.defaultProps = {};
