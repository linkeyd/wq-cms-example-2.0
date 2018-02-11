/**
 * Created by linwei on 2017/8/2.
 */
import React, {Component} from 'react';
import {Modal} from 'antd';
export default class ShowModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }
  showModel(){
    this.setState({
      visible:true
    })

  }
  okHandler(){
    this.props.getData();
    this.setState({
      visible:false
    })

  }
  hideModelHandler(){
    this.setState({
      visible:false
    })

  }
  render() {
    return (

      <span>
        <span onClick={e => {
          this.showModel()
        }}>
          {this.props.children }
        </span>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={e=>{this.okHandler()}}
          onCancel={e=>{this.hideModelHandler()}}
        >
        </Modal>
      </span>

    );
  }
}
ShowModal.defaultProps = {};
