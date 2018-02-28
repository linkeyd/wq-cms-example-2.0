/**
 * Created by linwei on 2017/8/2.
 */
import React, {Component} from 'react';
import {Menu, Icon, Dropdown, Button, message} from 'antd';
import {Link} from 'react-router-dom';

import {MenuUrl, DropDownUrl} from '../../../actions/userService';
import {postFetch} from '../../../utils/request';
import styles from './Menu.module.css';
import {connect} from 'react-redux';
import {DropDown} from '../../../actions/actions';

const {Item, SubMenu} = Menu;
const menuList = {
    "code": 200,
    "data": [
        {
            "url": "/index",
            "name": "首页",
            "icon": "home"
        },
        {
            "url": "/disStair",
            "name": "二级代理设置",
            "icon": "shopping-cart"
        },
        {
            "url": "/disManage",
            "name": "用户管理",
            "icon": "user"
        },
        {
            "url": "/userReport",
            "name": "用户报表",
            "icon": "bar-chart"
        },
        {
            "url": "/manageReport",
            "name": "代理商报表",
            "icon": "dot-chart"
        }
    ]
}

class MenuLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: menuList.data,
            dropDown: [],
            dropText: '',
            selectKey: '',
            openKey: ''
        };
        // this.getMenu();
        this.getDropDown();
    }

    async getMenu() {
        let id = window.localStorage.getItem('userId');
        let token = window.localStorage.getItem('token');
        let menu = await postFetch(MenuUrl, {
            id,
            token,
            gameId: window.localStorage.getItem('gameId')
        });
        if (menu.code === 200) {
            //判断刷新页面时菜单位置;
            let store = window.localStorage;
            if (this.props.location.pathname === store.getItem('selectKey')) {
                this.setState({
                    menu: menu.data,
                    selectKey: store.getItem('selectKey'),
                    openKey: store.getItem('openKey')
                });
            }
            else {
                this.setState({
                    menu: menu.data,
                    selectKey: menu.data[0].url,
                    openKey: '0'
                });
            }
        }
        else {
            window.localStorage.removeItem('userId');
            // this.props.history.push("/");
            message.error("获取数据失败")
        }
    }

    async getDropDown() {
        if (this.props.isDropDown) {
            let dropDown = await postFetch(DropDownUrl);
            if (dropDown.status === 200) {
                this.setState({
                    dropDown: dropDown.data,
                    dropText: dropDown.data[0].game
                });
                let value = dropDown.data[0].id;
                this.props.dispatch(DropDown(value))
            }
            else {
                message.error(dropDown.message);
            }
        }
    }

    handleMenuClick(e) {

        this.setState({
            dropText: e.item.props.children
        });
        this.props.dispatch(DropDown(e.key));
    }

    onSelect(e) {
        this.setState({
            selectKey: e.key
        });
        window.localStorage.setItem('selectKey', e.key);
    }

    onOpenChange(openKeys) {
        window.localStorage.setItem('openKey', openKeys[1] ? openKeys[1] : '0');
        this.setState({
            openKey: openKeys[1]
        })
    }

    render() {
        let item = 1;
        let menuItem = (options) => {
            if (options['children']) {
                return (
                    <SubMenu key={item++} title={<span><Icon type={options.icon}/><span
                        className={styles.menuTitle}>{options.name}</span></span>}>
                        {options.children.map(menuItem)}
                    </SubMenu>
                )
            }
            else {
                return (
                    <Item key={options.url ? options.url : item++}>
                        <Link to={options.url}>
                            <Icon type={options.icon}/>
                            <span> {options.name}</span>
                        </Link>
                    </Item>
                )
            }
        };

        let menu = () => {
            return (
                <Menu onClick={e => {
                    this.handleMenuClick(e)
                }}>
                    {this.state.dropDown.map(dropDownItem)}
                </Menu>
            )
        };

        let dropDownItem = (dropDownMenu) => {
            return (
                <Item key={dropDownMenu.id}>{dropDownMenu.game}</Item>
            )
        };
        return (
            <div>
                {this.props.isDropDown ?
                    <Dropdown overlay={menu()}>
                        <Button className={styles.gameSelect} size="large">
            <span>
              <Icon type="api"/>
                {this.state.dropText}
                <Icon type="down" className={styles.icon}/>
            </span>
                        </Button>
                    </Dropdown> : ' '}
                <Menu
                    mode="inline"
                    theme="dark"
                    onOpenChange={openKeys => {
                        this.onOpenChange(openKeys)
                    }}
                    onSelect={e => {
                        this.onSelect(e)
                    }}
                    selectedKeys={[this.state.selectKey]}
                    openKeys={[this.state.openKey]}
                    style={{height: '100%', borderRight: 0}}
                >
                    {this.state.menu.map(menuItem)}
                </Menu>
            </div>
        );
    }
}

MenuLayout.defaultProps = {};
let mapStateToProps = function (state) {
    return {
        dropDown: state.dropDown
    };
};

export default connect(mapStateToProps)(MenuLayout);
