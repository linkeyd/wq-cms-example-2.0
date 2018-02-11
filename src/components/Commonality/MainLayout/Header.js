/**
 * Created by linwei on 2017/8/2.
 */
import React, {Component} from 'react';
import styles from './Header.module.css';
import {Menu, Icon, Dropdown, DatePicker, message} from 'antd';
import QueueAnim from 'rc-queue-anim';
import HeaderMenu from './HeaderMenu';
import moment from 'moment';
import {connect} from 'react-redux';
import {SetDateValue, SetDefaultDate, SetVisibleDate} from '../../../actions/actions';
import {postFetch} from '../../../utils/request';
import {logOut} from '../../../actions/userService';
moment.locale('zh-cn');
const {RangePicker} = DatePicker;
const Item = Menu.Item;
// const SubMenu = Menu.SubMenu;
class Header extends Component {
    constructor(props) {
        super(props);
        let user = window.localStorage.getItem('username') ? window.localStorage.getItem('username') : 'admin';
        let header = '';
        switch (this.props.match.params.gameId) {
            case 'yaba':
                header = '丫霸十三水';
                break;
            case 'haoyun':
                header = '好运十三水';
                break;
            default:
                header = '账号管理';
                break;
        }
        this.state = {
            header: "测试titile",
            admin: user,
            visibility: true
        };

    }

    async loginOut() {
        let json = await postFetch(logOut, {
            username: window.localStorage.getItem('userId'),
            token: window.localStorage.getItem('token')
        });
        if (json.code === 200) {
            window.localStorage.removeItem('userId');
            this.props.history.push('/');
            message.success('退出登入成功');
        }

    }

    goBack() {
        this.props.history.push('/select');
    }

    onChange(date, dateString) {
        let time = [moment(dateString[0]).format('YYYYMMDD'), moment(dateString[1]).format('YYYYMMDD')];
        this.props.dispatch(SetDateValue(time));
    }

    onTimeChange(date, dateString) {
        let time = moment(dateString).format('YYYYMMDD');
        this.props.dispatch(SetDefaultDate(time));
    }

    render() {
        let menu = () => {
            return (
                <Menu>
                    <Item>
                        <a rel="noopener noreferrer" onClick={e => {
                            this.goBack(e)
                        }}>选择游戏</a>
                    </Item>
                    <Item>
                        <a rel="noopener noreferrer" onClick={e => {
                            this.loginOut(e)
                        }}>退出登陆</a>
                    </Item>
                </Menu>
            )
        };
        return (
            <div>
                <QueueAnim
                    delay={400}
                >
                    <div className={styles.logo} key="logo">
                        <h1 className={styles.title} onClick={e => {
                            this.goBack()
                        }}>{this.state.header}</h1>
                    </div>

                    <div className={styles.user} key="dro">
                        {this.props.visibleDate ?
                            <span key="datePick" style={{marginRight: 40}}>
            <RangePicker ref="DateTime" onChange={(date, dateString) => {
                this.onChange(date, dateString)
            }}
                         value={[moment(this.props.dateValue[0]), moment(this.props.dateValue[1])]}
                         format={this.props.format ? this.props.format : "YYYY-MM-DD"}
            />
          </span> : ''

                        }

                        {/*{(this.props.pathname === "/coreDay")?*/}
                        {/*<span style={{marginRight:40}}>*/}
                        {/*<DatePicker onChange={(date,dateString) => {this.onTimeChange(date,dateString)}} defaultValue={moment()}  format={this.props.format ? this.props.format : "YYYY-MM-DD"} />*/}
                        {/*</span>*/}

                        {/*: ''*/}
                        {/*}*/}
                        <Dropdown overlay={menu()}>
                            <a className={styles.users} href="#">
                                <Icon type="user"/>{this.state.admin} <Icon type="down"/>
                            </a>
                        </Dropdown>

                    </div>
                </QueueAnim>
            </div>
        );
    }
}

Header.defaultProps = {};
let mapStateToProps = function (state, ownProps) {
    return {
        dateDefault: state.dateDefault,
        visibleDate: state.visibleDate,
        dateValue: state.dateValue
    };
};
export default connect(mapStateToProps)(Header);
