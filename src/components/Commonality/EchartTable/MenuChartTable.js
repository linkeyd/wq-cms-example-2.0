/**
 * Created by linwei on 2017/8/28.
 */
import React, {Component} from 'react';
import {Menu, Spin} from 'antd';
import styles from './EcharTable.module.css';
import EchartTable from './EchartTable';
const Item = Menu.Item;
export default class MenuChartTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.menu[0]
    };
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


      <div className={styles.warp}
           style={{
             width: this.props.width
           }}
      >
        <Spin spinning={this.props.loading?this.props.loading:false} tip="加载中...">
          <div>
            <Menu
              onClick={e => this.handleClick(e)}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              {this.props.menu.map(menuItem)}
            </Menu>
          </div>
          <EchartTable
            chartKey={this.props.chartKey}
            warp={true}
            tableScroll={this.props.tableScroll}
            option={this.props.option}
            dataSource={this.props.dataSource}
            columns={this.props.columns}
            content={this.props.content}
            showTable={this.props.showTable}
            showChart={this.props.showChart}
          />

        </Spin>
      </div>

    );
  }
}
MenuChartTable.defaultProps = {};
