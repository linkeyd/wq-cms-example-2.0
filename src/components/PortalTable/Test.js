/**
 * Created by linwei on 2018/4/24.
 */
import React, {Component} from 'react';
import DataTable from './DataTable';
export default class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DataTable
                    pageSize={10}
                    operation={['show','edit','delete']}
                    add={true}
                    columns={[]}
                    url={}

                />
            </div>
        );
    }
}
Test.defaultProps = {};