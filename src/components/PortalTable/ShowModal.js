/**
 * Created by linwei on 2018/4/24.
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

    showModel() {
        this.setState({
            visible: true
        })

    }

    okHandler() {
        this.setState({
            visible: false
        })
    }
    render() {
        let showRender=(options,index)=>{
            let value = this.props.value[options.key];
            if(typeof options.render!=='undefined'){
                value = options.render(value);
            }
            return(
                <div key={index}>
                    <h3>{typeof options.title !== 'undefined'?options.title:options.showTitle} : {value}</h3>

                </div>
            )
        };
        return (
            <span>
        <span onClick={e => {
            this.showModel()
        }}>
          {this.props.children}
        </span>
        <Modal
            title={this.props.title}
            visible={this.state.visible}
            onOk={e => {
                this.okHandler()
            }}
            onCancel={e => {
                this.okHandler()
            }}
            footer={[]}
        >
            {this.props.columns.map(showRender)}
        </Modal>
      </span>
        );
    }
}
ShowModal.defaultProps = {};