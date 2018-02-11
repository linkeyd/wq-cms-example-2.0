/**
 * Created by linwei on 2017/8/28.
 */
import React, {Component} from 'react';
import EchartTable from '../EchartTable/EchartTable';

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



export default class Chart extends Component {
    constructor(props) {
      super(props);
      this.state={
        option:{},
        data:[]
      };
      this.getData();
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
        option:option
      })
    }
  componentDidUpdate(nextProps) {
      if(this.props.dropDown !== nextProps.dropDown){
        console.log(this.props.dropDown);
        this.getData();
      }
  }
    render() {
        return (
            <div>
              <EchartTable
                width="800px"
                tableScroll={{x:1400}}
                option={this.state.option}
                dataSource={this.state.data}
                columns={columns}
                content='AVG：平均每日7日未登录玩家人数15364.79'
                showTable={true}
                showChart={false}
                loading={true}
              />
            </div>
        );
    }
}
Chart.defaultProps = {};
