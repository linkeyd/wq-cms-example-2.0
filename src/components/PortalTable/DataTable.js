/**
 * Created by linwei on 2017/8/2.
 */
import React, {Component} from 'react';
import {Table, Pagination, Popconfirm,Button,message} from 'antd';
import EditModal from './EditModal';
import ShowModal from './ShowModal';
import styles from './DataTable.css';
import {getFetch,deleteFetch} from '../../../utils/request';

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      pageSize:this.props.pageSize,
      columns:this.props.columns,
      current:1,
      total:1,
      dataSource:[]
    }
  }
  componentDidMount(){
    this.getData();
  }

    /**
     * 获取数据
     * @param page
     * @returns {Promise<void>}
     */
  async getData(page = 1){
    this.setState({
      loading:true
    });
    let json = await getFetch(this.props.url+'?page='+page+'&pageSize='+this.props.pageSize);
    if(json.status===200){
        this.setState({
            loading:false,
            dataSource:json.msg.list,
            total:json.msg.total
        })
    }
    else{
        message.error('获取数据失败');
    }
  }

    /**
     * 翻页
     * @param page
     */
  pageChangeHandler(page) {
    this.setState({
      current:page
    });
    this.getData(page);
  }

    /**
     * 删除数据
     * @param id
     * @returns {Promise<void>}
     */
  async deleteHandler(id) {
    //删除数据的ajax
      const result = await deleteFetch(this.props.url+'/'+id);
      if(result.status ===200){
          this.getData(this.state.current);
      }
      else{
        message.error("数据删除失败")
      }
  }

  render() {
    let key = 0;
      /**
       * this.props.operation
       * 添加表格是否需要删除操作选项
       * @returns {*}
       */
    let option = ()=>{
      if(this.props.operation.length>0){
        return [...this.state.columns,{
          title: '操作',
          key: 'operation',
          render: (text, record) => (
            <span className={styles.operation}>
               {this.props.operation.indexOf("show") >=0?
                   <ShowModal value={record} title="查看" columns={this.state.columns}>
                       <Button type="primary" size="small">查看</Button>
                   </ShowModal>:''}
                {this.props.operation.indexOf("edit") >=0?
                 <EditModal
                     value={record}
                     title="修改"
                     getData={e=>{this.getData(this.state.current)}}
                     url={this.props.url}
                     columns={this.state.columns}

                 >
                     <Button type="dashed" size="small" style={{"marginLeft":15}}>编辑</Button>
                </EditModal>:''}
                {this.props.operation.indexOf("delete") >=0?
                    <Popconfirm title="是否要删除本条数据?" onConfirm={e=>{this.deleteHandler( record.id)}}>
                        <Button type="danger" size="small" style={{"marginLeft":15}}>删除</Button>
                    </Popconfirm>:''}
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
            {this.props.add ===true?
          <EditModal
              value={{}}
              title="添加"
              getData={e=>{this.getData()}}
              url={this.props.url}
              columns={this.state.columns}
          >
            <Button type="primary" >添加</Button>
          </EditModal>:''}
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
