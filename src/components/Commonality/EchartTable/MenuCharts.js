/**
 * Created by linwei on 2017/8/30.
 */
import React, {Component} from 'react';
import {Menu, Spin} from 'antd';
import Charts from './Charts';
import styles from './EcharTable.css';
const Item = Menu.Item;
export default class MenuCharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.menu[0]
    }

  }

  handleClick(e) {
    this.setState({
      current: e.key
    });
    this.props.handleClick(e);
  }

  render() {
    let menuItem = (options) => {
      return (
        <Item key={options}>
          {options}
        </Item>
      )
    };
    return (
      <div className={this.props.warp ? '' : styles.warp}
           style={{
             width: this.props.width
           }}
      >
        <Spin spinning={this.props.loading ? this.props.loading : false} tip="加载中...">
          <Menu
            onClick={e => this.handleClick(e)}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            {this.props.menu.map(menuItem)}
          </Menu>
          <div className={styles.content}>
            {this.props.content}
          </div>
          <div className={styles.charts}>
          <Charts
            chartKey={this.props.chartKey}
            option={this.props.option}
            showChart={true}
          />
          </div>
        </Spin>
      </div>
    );
  }
}
MenuCharts.defaultProps = {};
