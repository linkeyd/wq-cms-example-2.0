/**
 * Created by linwei on 2017/8/30.
 */
import React, {Component} from 'react';
import MenuCharts from '../EchartTable/MenuCharts';
export default class MenuChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {},
      loading: true
    };

    this.getData();
  }

  getData() {

    setTimeout(() => {
      this.data();
    }, 1000)
  }

  data() {
    let option = {
      title: {text: 'ECharts 入门示例'},
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };

    this.setState({
      option: option,
      loading: false
    })
  }
  handleClick(component,e) {
    console.log(e);
    console.log(component);
  }
  render() {
    return (
      <div>
        <MenuCharts
          width="400px"
          menu={['测试1', '测试2', '测试3']}
          option={this.state.option}
          handleClick={this.handleClick.bind(null, this)}
          loading={this.state.loading}
          content='AVG：平均每日7日未登录玩家人数15364.79'
        />
      </div>
    );
  }
}
MenuChart.defaultProps = {};
