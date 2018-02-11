/**
 * Created by linwei on 2017/9/7.
 */
import React, {Component} from 'react';
import {Menu,Icon } from 'antd';
const {Item} = Menu;
export default class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state={
          current: this.props.headerMenu[0].url
        }
    }
    handleClick(e) {

     this.setState({
       current: e.key
     });
     this.props.handleMenu(e);
   }

    render() {
        let itemMap=(menu)=>{

          return(
            <Item key={menu.url} disabled={menu.disabled?menu.disabled:false}>
              <Icon type={menu.icon} />{menu.title}
            </Item>
          )

        };
        return (
          <Menu
            onClick={e => {
              this.handleClick(e)
            }}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="dark"
          >
            {this.props.headerMenu.map(itemMap)}
          </Menu>
        );
    }
}
HeaderMenu.defaultProps = {};
