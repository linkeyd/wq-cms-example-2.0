/**
 * Created by linwei on 2018/5/9.
 */
import React, {Component} from 'react';
import DataTable from './DataTable';

const TableConfig = [
    {
        title:'活动ID',
        dataIndex:'id',
        key:'id',
    }, {
        title:'活动类型',
        dataIndex:'type',
        key:'type',
        type:'text',
        rule: [{required: true, message: '请输入活动类型'}],
        disabled:true
    },
    {
        title:'活动名',
        dataIndex:'title',
        key:'title',
    },
    {
        title:'优先级(1-100)',
        dataIndex:'order',
        key:'order',
        type:'text',
        rule: [{required: true, message: '请输入优先级'}]
    },
    {
        title:'开始时间',
        dataIndex:'start_time',
        key:'start_time',
        type:'time',
        rule: [{required: true, message: '请输入开始时间'}],
        render: text=>{

            return(
                <a>{text}</a>
            )
        }
    },
    {
        title:'结束时间',
        dataIndex:'end_time',
        key:'end_time',
        type:'time',
        rule: [{required: true, message: '请输入结束时间'}],
    },
    {
        key:"content",
        showTitle:"活动内容"
    }
];
export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://xxx.xxx.com/gets'
        }
    }


    render() {
        return (
            <PortalTable
                url={this.state.url}
                pageSize={10}
                operation={['show', 'edit', 'create']}
                columns={TableConfig}
            />

        );
    }
}
