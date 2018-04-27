
import React from 'react';
import moment from 'moment';
export const config = {
    show: true,
    edit: true,
    delete: true,
    pageSize: 10,
    url: "http://192.168.2.75",
    columns: [
        {
            title: '真实姓名',
            dataIndex: 'name',
            key: 'name',
            type:'text',
            rule:[]
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            type:'text',
            rule:[]
        },
        {
            title: '电话号码',
            dataIndex: 'telephone',
            key: 'telephone',
            type:'text',
            rule:[]
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: text => {
                let time = '';
                if (typeof text !== 'undefined') {
                    time = moment(text).format('YYYY-MM-DD HH:mm');
                }

                return (
                    <a>{time}</a>
                )
            }
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: text => {
                if (text === 1) {
                    text = '正常'
                }
                else {
                    text = '冻结'
                }
                return (<a>{text}</a>)
            }
        }

    ]
};