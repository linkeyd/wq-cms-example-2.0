/**
 * Created by linwei on 2017/8/2.
 */
import React, {Component} from 'react';
import {Table, Pagination, Popconfirm,Button} from 'antd';
import ShowModal from './ShowModal';
import styles from './DataTable.css';
import {getFetch,postFetch} from '../../../utils/request';
import {TableConfig} from '../../GameHaoyun/const';
import {GetDataTable} from '../../../actions/service';
export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      options:TableConfig.options,
      pageSize:TableConfig.pageSize,
      columns:TableConfig.columns,
      current:1,
      total:1,
      dataSource:[]
    }
  }
  componentDidMount(){
    this.getData();
  }

  //获取数据
  async getData(){
    this.setState({
      loading:true
    });
    let json = await getFetch(GetDataTable);
    this.setState({
      loading:false,
      dataSource:json.dataSource,
      total:json.total
    })
  }
  //翻页
  pageChangeHandler(page) {
    this.setState({
      current:page
    });
    this.getData();
  }
  //删除数据
  async deleteHandler(id) {
    //删除数据的ajax


    this.getData();
  }

  render() {
    let key = 0;
    let option = ()=>{
      if(this.state.options){
        return [...this.state.columns,{
          title: 'Operation',
          key: 'operation',
          render: (text, record) => (
            <span className={styles.operation}>
          <ShowModal record={record} value={record} title="修改" getData={e=>{this.getData()}}>
              <a>Edit</a>
          </ShowModal>
          <Popconfirm title="是否要删除本条数据?" onConfirm={e=>{this.deleteHandler( record.id)}}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
          ),
        }]
      }
      else{
        return this.state.columns;
      }
    };
    return (
      <div >
        <div style={{'marginBottom':'20px'}}>
          <ShowModal value={{}} title="修改" getData={e=>{this.getData()}}>
            <Button type="primary" >添加</Button>
          </ShowModal>
        </div>
        <Table
          columns={option()}
          dataSource={this.state.dataSource}
          rowKey={record => record.id}
          pagination={false}
          loading={this.state.loading}
        />
        <Pagination
          className="ant-table-pagination"
          total={this.state.total}
          current={this.state.current}
          pageSize={this.state.pageSize}
          onChange={page=>{this.pageChangeHandler(page)}}
        />
      </div>
    );
  }
}
DataTable.defaultProps = {};
