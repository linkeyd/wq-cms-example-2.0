/**
 * Created by linwei on 2017/8/28.
 */
import React, {Component} from 'react';
import MenuChartTable from '../EchartTable/MenuChartTable';
import moment from 'moment';
moment.locale('zh-cn');
const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money'
}, {
  title: 'Address',
  dataIndex: 'address'
}];
const data = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park'
}];

export default class MenuChart extends Component {
    constructor(props) {
        super(props);
      this.state={
        option:{},
        data:[],
        loading:true
      };
      this.getData();

    }
  componentWillMount(){
    //this.props.defaultDateValue([moment().subtract(5, 'days'),moment()]);
  }
  getData(){

    setTimeout(()=>{
      this.data();
    },1000)
  }
  data(){
    let option = {
      title: { text: 'ECharts 入门示例' },
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
    for(var i=4;i<100;i++){
      data.push(
        {
          key: i,
          name: 'John Brown',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park'
        }
      )
    }
    this.setState({
      data:data,
      option:option,
      loading:false
    })
  }
  handleClick(component,e){
    console.log(e);
    console.log(component);
    let option = {
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['最高气温','最低气温']
      },
      toolbox: {
        show : true,
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四','周五','周六','周日']
        }
      ],
      yAxis : [
        {
          type : 'value',
          axisLabel : {
            formatter: '{value} °C'
          }
        }
      ],
      series : [
        {
          name:'最高气温',
          type:'line',
          data:[11, 11, 15, 13, 12, 13, 10],
          markPoint : {
            data : [
              {type : 'max', name: '最大值'},
              {type : 'min', name: '最小值'}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name: '平均值'}
            ]
          }
        },
        {
          name:'最低气温',
          type:'line',
          data:[1, -2, 2, 5, 3, 2, 0],
          markPoint : {
            data : [
              {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name : '平均值'}
            ]
          }
        }
      ]
    };
    component.setState({
      option:option,
      loading:true
    })


  }
    render() {
        return (
            <div>
              <MenuChartTable
                chartKey="main"
                width="700px"
                tableScroll={{x:1400}}
                menu={['测试1','测试2','测试3']}
                option={this.state.option}
                dataSource={this.state.data}
                columns={columns}
                content='AVG：平均每日7日未登录玩家人数15364.79'
                showTable={true}
                showChart={true}
                handleClick={this.handleClick.bind(null,this)}
                loading={this.state.loading}
              />
              <MenuChartTable
                chartKey="main1"
                width="700px"
                tableScroll={{x:1400}}
                menu={['测试1','测试2','测试3']}
                option={this.state.option}
                dataSource={this.state.data}
                columns={columns}
                content='AVG：平均每日7日未登录玩家人数15364.79'
                showTable={true}
                showChart={true}
                handleClick={this.handleClick.bind(null,this)}
                loading={false}
              />
              <MenuChartTable
                chartKey="Main2"
                width="700px"
                tableScroll={{x:1400}}
                menu={['测试1','测试2','测试3']}
                option={this.state.option}
                dataSource={this.state.data}
                columns={columns}
                content='AVG：平均每日7日未登录玩家人数15364.79'
                showTable={true}
                showChart={true}
                handleClick={this.handleClick.bind(null,this)}
                loading={false}
              />
            </div>
        );
    }
}
MenuChart.defaultProps = {};
