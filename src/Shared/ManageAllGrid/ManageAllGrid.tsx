import React from 'react';
import MUIDataTable, { MUIDataTableOptions, MUIDataTableColumnDef } from 'mui-datatables'

import { ManageAllProps } from '../../Interfaces/ManageAll'
import { Link } from 'react-router-dom';





function ManageAllGrid({ data, screenName, endpoint, newRecord }: ManageAllProps) {

    console.log(newRecord);

    const options: MUIDataTableOptions = {
        filterType: 'checkbox',
        download: false,
        search: false,
        filter: false,
        selectableRows: 'none',
        rowsPerPage: 5
    };


    const columns: MUIDataTableColumnDef[] = [{
        label: 'Details', name: 'details', options: {}
    }, {
        label: 'Edit', name: 'id', options: {
            customBodyRender: (value, tablemeta, updateValue) => <Link to={{ pathname: `/${endpoint}/${value}` }}>Edit</Link>
        }
    }]


    return (

        <div className='subject-categories-form'>
            <h5 className='text-start'>
                Manage all
            </h5>
            <div className='row'>
                <div className='col-md-12 mt-1'>
                    <Link to={newRecord}> <i className="fa fa-plus fa-lg float-end pe-2 " style={{ fontSize: '2.5em', color: '#0b6884' }}></i></Link>


                </div>
                <div className='col-md-12 mt-3'>
                    <MUIDataTable
                        title={screenName}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </div>

                <div className=''>

                </div>
            </div>

        </div>
    )
}

export default ManageAllGrid;