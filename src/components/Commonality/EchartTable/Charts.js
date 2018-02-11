/**
 * Created by linwei on 2017/8/25.
 */
import React, {Component} from 'react';
import styles from './Charts.module.css';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入线性表
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';

//加载主题
import {theme} from './utils/theme';
echarts.registerTheme('walden', theme);
/**
 * this.props
 * chartKey:div初始化id
 * option初始化数据
 * showChart是否显示图表
 */
export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.myChart = '';
  }
  componentDidMount(){
    this.myChart=echarts.init(document.getElementById(this.props.chartKey), 'walden');
  }
  componentDidUpdate(nextProps) {

    if(this.props.showChart && !Object.is(nextProps.option,this.props.option)){
      this.myChart.dispose();
      this.myChart=echarts.init(document.getElementById(this.props.chartKey), 'walden');
      this.myChart.setOption(this.props.option);
    }
  }
  render() {
    return (
      <div id={this.props.chartKey} className={styles.height}>

      </div>
    );
  }
}
Charts.defaultProps = {};
