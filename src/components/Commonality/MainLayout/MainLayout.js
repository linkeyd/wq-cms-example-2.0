/**
 * Created by linwei on 2017/8/2.
 */
import React, {Component} from 'react';
import {Layout,Icon} from 'antd';
import HeaderLayout from './Header';
import MenuLayout from './MenuLayout';
import styles from './MainLayout.module.css';
import QueueAnim from 'rc-queue-anim';
import {connect} from 'react-redux';
import moment from 'moment';
import {Route, Switch} from 'react-router-dom';
import MenuChartTable from '../Test/MenuChartTable';
import {SetVisibleDate} from '../../../actions/actions';
const {Header, Content, Sider} = Layout;
require('./MainLayout.css');
moment.locale('zh-cn');
class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerName:'',
            collapsed: false,
        }
        if (!window.localStorage.getItem('userId')) {
            // this.props.history.push('/');
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
    toggle(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
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
        // let routeRender = () => {
        //     switch (this.props.match.params.gameId){
        //         case 'yaba':
        //             return(
        //                 <Switch>
        //                     {YabaRoutes.map(routeList)}
        //                 </Switch>
        //             );
        //         case 'haoyun':
        //             return(
        //                 <Switch>
        //                     {HaoyunRoutes.map(routeList)}
        //                 </Switch>
        //             );
        //         case 'disManage':
        //             return(
        //                 <Route component={DisUserManage}/>
        //             );
        //         case 'management':
        //             return(
        //                 <Route component={Management}/>
        //             );
        //         default:
        //             this.props.history.push('/404')
        //     }
        // };
        let routeList = (list,i)=>{
            return(
                <Route key={i} path={list.url} component={list.component}/>
            )
        }
        return (

            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className={styles.logo}>
                        <img src={require('./deslogo1.png')} alt=""/>
                        <span>xx</span>
                    </div>
                    <MenuLayout />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <span>
                               <Icon
                                   className={styles.trigger}
                                   type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                   onClick={e=>{this.toggle()}}
                               />
                        </span>

                        <Route component={HeaderLayout}/>

                    </Header>
                    <Content style={{
                        padding: 0,
                        margin: 15,
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
                            <Route component={MenuChartTable}/>
                            {/*{routeRender()}*/}
                        </QueueAnim>
                    </Content>
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
