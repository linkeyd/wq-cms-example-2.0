/**
 * Created by linwei on 2017/8/2.
 */
import React, {Component} from 'react';
import {Layout} from 'antd';
import HeaderLayout from './Header';
import MenuLayout from './MenuLayout';
import styles from './MainLayout.module.css';
import QueueAnim from 'rc-queue-anim';
import {connect} from 'react-redux';
import moment from 'moment';
import {Route, Switch} from 'react-router-dom';

import {SetVisibleDate} from '../../../actions/actions';
const {Header, Content, Sider} = Layout;
moment.locale('zh-cn');
class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerName:''
        }
        if (!window.localStorage.getItem('userId')) {
            this.props.history.push('/');
        }
        this.props.dispatch(SetVisibleDate(false));
    }
    height(){
        if(document.body.availWidth>1024){
            return document.body.clientHeight / 1.11
        }
        else{
            return document.body.availHeight *2
        }
    }


    handleMenu(e) {
        console.log(e);
    }
    componentDidUpdate(nextProps) {
        if(nextProps.location.pathname !== this.props.location.pathname && this.props.visibleDate === true){
            this.props.dispatch(SetVisibleDate(false));
        }
    }
    render() {
        let routeRender = () => {
            switch (this.props.match.params.gameId){
                // case 'yaba':
                //     return(
                //         <Switch>
                //             {YabaRoutes.map(routeList)}
                //         </Switch>
                //     );
                // case 'haoyun':
                //     return(
                //         <Switch>
                //             {HaoyunRoutes.map(routeList)}
                //         </Switch>
                //     );
                // case 'disManage':
                //     return(
                //         <Route component={DisUserManage}/>
                //     );
                // case 'management':
                //     return(
                //         <Route component={Management}/>
                //     );
                default:
                    this.props.history.push('/404')
            }
        };
        let routeList = (list,i)=>{
            return(
                <Route key={i} path={list.url} component={list.component}/>
            )
        }
        return (
            <Layout>

                <Header className={styles.header} key="a">
                    <Route component={HeaderLayout}/>
                </Header>
                <Layout>
                    <Sider className={styles.sider}>
                        <Route isDropDown={false} component={MenuLayout}/>
                    </Sider>
                    <Layout style={{padding: '15px'}}>
                        <Content style={{
                            padding: 15,
                            margin: 0,
                            minHeight:  window.innerHeight / 1.11,
                            minWidth: 1111,
                            backgroundColor: 'white'
                        }}
                                 className={styles.content}
                        >
                            <QueueAnim
                                delay={[400, 10]}
                                duration={[350, 100]}
                                interval={[50, 10]}
                                type={'right'}
                            >
                                {routeRender()}
                            </QueueAnim>
                        </Content>

                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
MainLayout.defaultProps = {};

let mapStateToProps = function (state, ownProps) {
    return {
        visibleDate:state.visibleDate
    };
};
export default connect(mapStateToProps)(MainLayout);
