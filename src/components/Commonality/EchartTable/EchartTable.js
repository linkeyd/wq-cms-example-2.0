/**
 * Created by linwei on 2017/8/25.
 */
import React, {Component} from 'react';
import Tables from './Tables';
import Charts from './Charts';
import {Icon, Spin} from 'antd';
import styles from './EcharTable.module.css';
let iconStyle = {
  color: 'rgb(206, 206, 206)',
  border: 'solid 1px #bbb2b2',
  backgroundColor: '#ffffff'
};
export default class EchartTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: this.props.showTable,
      showChart: this.props.showChart
    };
  }

  handleChange(value) {
    let display = !this.state[value];
    this.setState({
      [value]: display
    })
  }

  render() {
    let tableStyle = ()=>{
      if(this.state.showTable && !this.state.showChart){
        return {padding: '20px'}
      }
      else if(!this.state.showTable){
        return {display: 'none'};
      }
      else{
        return {}
      }
    };
    return (
      <div className={this.props.warp ? '' : styles.warp}
           style={{
             width: this.props.width
           }}
      >
        <Spin spinning={this.props.loading?this.props.loading:false} tip="加载中...">
          {this.props.content == ''?'':
            <div className={styles.content}>
              {this.props.content}
            </div>
          }
          <div className={styles.charts}
               style={this.state.showChart ? {} : {display: 'none'}}
          >
            <Charts
              chartKey={this.props.chartKey}
              option={this.props.option}
              showChart={this.state.showChart}
            />
          </div>
          <div className={styles.table}
               style={tableStyle()}
          >
            <Tables
              columns={this.props.columns}
              dataSource={this.props.dataSource}
            />
          </div>
          <div className={styles.footer}>
            <div className={styles.icon}
                 style={this.state.showTable ? {} : iconStyle}
                 onClick={() => {
                   this.handleChange('showTable')
                 }}>
              <Icon type="calendar"/>
            </div>
            <div className={styles.icon}
                 style={this.state.showChart ? {} : iconStyle}
                 onClick={() => {
                   this.handleChange('showChart')
                 }}>
              <Icon type="pie-chart"/>
            </div>
            <div className={styles.rightIcon} onClick={() => this.props.downLoad()}>
              <Icon type="cloud-download-o"/>
            </div>
          </div>
        </Spin>
      </div>
    );
  }
}
EchartTable.defaultProps = {};
