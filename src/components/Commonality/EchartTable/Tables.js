/**
 * Created by linwei on 2017/8/25.
 */
import React, {Component} from 'react';
import {Table} from 'antd';
// import styles from 'Table.css';
/**
 * this.props
 * columns:表格说明
 * dataSource:数据来源
 * tableScroll:滚动条
 */
export default class Tables extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
              <Table
                columns={this.props.columns}
                dataSource={this.props.dataSource}
                bordered
                scroll={this.props.tableScroll}
              />
            </div>
        );
    }
}
Tables.defaultProps = {};
