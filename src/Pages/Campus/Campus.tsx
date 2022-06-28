import React, { useEffect, useState } from 'react';
import Label from '../../components/Label/Label';
import DropDown from '../../components/Select/Dropdown';
import TextBox from '../../components/Textbox/Textbox';
import { AcadClassDet, Campus as TCampus } from '../../Interfaces/Campus';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Campus.css'
import MUIDataTable, { MUIDataTableOptions, MUIDataTableColumnDef } from 'mui-datatables'
import { TUIPageData } from '../../Interfaces/General';
import {ApiUtil} from '../../API/apiUtil'
import {CampCategory} from '../../API/Endpoints'
import {campusInitDetails} from './InitDetails'

function Campus() {
    const [campusDet, setCampusDet] = useState<TCampus>(campusInitDetails);
    const [key, setKey] = useState<string>('details');
    const [bottomKey, setBottomKey] = useState<string>('classes');
    const [uiPageData,setUiPageData] = useState<TUIPageData>({
        acadYearDet:[],
        details:[],
        districtDet:[],
        mandalDet:[],
        stateDet:[]

    });
    const apiUtil = new ApiUtil();

    useEffect(()=>{
        getUiPageData();
        getCampusDetails();
    },[])

    const getUiPageData = async () =>{
       await apiUtil.fetch(CampCategory.getUiPageData).then((value)=>setUiPageData(value));
    }

    const getCampusDetails = async () => {
        await apiUtil.fetch(CampCategory.getById,'Campus').then((value)=>setCampusDet(value))
    }

    const options: MUIDataTableOptions = {
        filterType: 'checkbox',
        download: false,
        search: false,
        filter: false,
        rowsPerPage: 5,
        print: false,
        viewColumns: false,
        onRowClick: ((rowData: string[]) => {
            console.log(rowData);
        }),
        onRowsSelect(currentRowsSelected, rowsSelected) {
            console.dir("rowselected");
            console.log(rowsSelected);
        },
    };

    const columns: MUIDataTableColumnDef[] = [{
        label: 'Details', name: 'details', options: {}
    },{
        label:'Edit',name:'id'
    }]

    const data = [
        ["Joe James"],
        ["John Walsh"],
        ["Bob Herm"],
        ["James Houston"],
    ];

    const formatToTimeString = (date: Date): string => {
        return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    }

    const classGrid = (columns: MUIDataTableColumnDef[], data: AcadClassDet[]) => {
        

        return (
            <div>
                <MUIDataTable

                    title={"Employee List"}
                    data={data}
                    columns={columns}
                    options={options}

                />
            </div>
        )
    }

    const timings = () => {
        return (
            <div className='d-flex mt-3'>
                <div>
                    <Label labelName='Class Duration (Min)' isMandatory />
                    <TextBox id='periodDuration'
                        placeHolder='duration'
                        onChange={() => { console.log('hi') }}
                        type="number"
                        validity=''
                        value={campusDet.acadCampDet.periodDuration}
                        required
                    />
                </div>
                <div className='ms-5'>
                    <div className='d-flex'>
                        <div>
                            <Label labelName='Session 1' isMandatory />
                            <TextBox id='session1FromTime'
                                placeHolder='session1ToTime'
                                onChange={() => { console.log('hi') }}
                                type="time"
                                validity=''
                                value={formatToTimeString(campusDet.acadCampDet.session1FromTime)}
                                required
                            />
                        </div>
                        <div className='ms-1'>
                            <Label labelName='Session 2' isMandatory />
                            <TextBox id='session2FromTime'
                                placeHolder='duration'
                                onChange={() => { console.log('hi') }}
                                type="time"
                                validity=''
                                value={formatToTimeString(campusDet.acadCampDet.session2FromTime)}
                                required
                            />
                        </div>
                        <div className='ms-1'>
                            <Label labelName='Session 3' isMandatory />
                            <TextBox id='session3FromTime'
                                placeHolder='duration'
                                onChange={() => { console.log('hi') }}
                                type="time"
                                validity=''
                                value={formatToTimeString(campusDet.acadCampDet.session3FromTime)}
                                required
                            />
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <div>
                            <TextBox id='session1ToTime'
                                placeHolder='session1ToTime'
                                onChange={() => { console.log('hi') }}
                                type="time"
                                validity=''
                                value={formatToTimeString(campusDet.acadCampDet.session1ToTime)}
                                required
                            />
                        </div>
                        <div className='ms-1'>
                            <TextBox id='session2ToTime'
                                placeHolder='duration'
                                onChange={() => { console.log('hi') }}
                                type="time"
                                validity=''
                                value={formatToTimeString(campusDet.acadCampDet.session2ToTime)}
                                required
                            />
                        </div>
                        <div className='ms-1'>                            
                            <TextBox id='session3ToTime'
                                placeHolder='duration'
                                onChange={() => { console.log('hi') }}
                                type="time"
                                validity=''
                                value={formatToTimeString(campusDet.acadCampDet.session3ToTime)}
                                required
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="subject-categories-form">
                <h5>
                    <div className="d-flex">
                        <div style={{ paddingLeft: "10px", paddingTop: '5px' }}>
                            <i
                                className="fa fa-angle-left back-but"
                                style={{ cursor: "pointer" }}
                                id="back-button-mandal"
                                fa-lg=""
                            // onClick={() =>navigate(-1)}
                            >
                                <p id="backbuttontext"></p>
                            </i>
                        </div>
                        <div style={{ paddingLeft: "19px", paddingTop: '5px' }}>Campus Details</div>

                    </div>
                </h5>
                <form className='mt-3'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <Label isMandatory labelName='Campus Details' />
                            <TextBox
                                id="details"
                                placeHolder='campus details'
                                onChange={() => console.log('hi')}
                                type="text"
                                validity=''
                                value={campusDet.details}
                                required
                            />
                        </div>
                        <div className='col-md-4'>
                            <Label isMandatory labelName='Year' />
                            <DropDown
                                id="acadNo"
                                value={campusDet.acadCampDet.acadNo}
                                onChange={() => console.log('hi')}
                                validity=''
                                options={uiPageData.acadYearDet}
                            />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => {
                                if (k) {
                                    setKey(k);
                                }
                            }}
                            className='w-100'
                            style={{ color: '#009bca41' }}
                        >

                            <Tab eventKey="details" title="Details">
                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='Code' />
                                        <TextBox
                                            id="code"
                                            placeHolder='code'
                                            onChange={() => console.log('hi')}
                                            type="text"
                                            validity=''
                                            value={campusDet.code}
                                            required
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='Address 1' />
                                        <TextBox
                                            id="addr1"
                                            placeHolder='address 1'
                                            onChange={() => console.log('hi')}
                                            type="text"
                                            validity=''
                                            value={campusDet.addr1}
                                            required
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='Address 2' />
                                        <TextBox
                                            id="addr2"
                                            placeHolder='address 2'
                                            onChange={() => console.log('hi')}
                                            type="text"
                                            validity=''
                                            value={campusDet.addr2}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='Address 3' />
                                        <TextBox
                                            id="addr3"
                                            placeHolder='address 3'
                                            onChange={() => console.log('hi')}
                                            type="text"
                                            validity=''
                                            value={campusDet.addr3}
                                            required
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='State' />
                                        <DropDown
                                            id="stateNo"
                                            value={campusDet.stateNo}
                                            onChange={() => console.log('hi')}
                                            validity=''
                                            options={uiPageData.stateDet}
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='Districts' />
                                        <DropDown
                                            id="districtNo"
                                            value={campusDet.districtNo}
                                            onChange={() => console.log('hi')}
                                            validity=''
                                            options={uiPageData.districtDet}
                                        />
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='Mandals' />
                                        <DropDown
                                            id="mandalNo"
                                            value={campusDet.mandalNo}
                                            onChange={() => console.log('hi')}
                                            validity=''
                                            options={uiPageData.mandalDet}
                                        />
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="academicYear" title="Academic Year">
                                <div className='row mt-3'>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='From Date' />
                                        <TextBox
                                            id="fromDate"
                                            placeHolder='from date'
                                            onChange={() => console.log('hi')}
                                            type="date"
                                            validity=''
                                            value={new Date(campusDet.acadCampDet.fromDate).toISOString().substring(0,10)}
                                            required
                                        />
                                    </div>
                                    <div className='col-md-4'>
                                        <Label isMandatory labelName='To Date' />
                                        <TextBox
                                            id="fromDate"
                                            placeHolder='address 3'
                                            onChange={() => console.log('hi')}
                                            type="date"
                                            validity=''
                                            value="Chowrasta"
                                            required
                                        />
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='mt-3'>



                        <h1 style={{ color: '#009bca', fontSize: '16px', borderBottom: '1px solid #009bca' }}>Administration</h1>
                        <Tabs
                            defaultActiveKey="profile"
                            id="controlled-tab-example"
                            activeKey={bottomKey}
                            onSelect={(k) => {
                                if (k) {
                                    setBottomKey(k);
                                }
                            }}
                            className='w-100 mt-3'
                            style={{ color: '#009bca41' }}
                        >

                            <Tab eventKey="classes" title="Classes">
                                <div className=' mt-3' style={{ width: '35%' }}>
                                    {classGrid(columns, campusDet.acadCampDet.acadClassDet)}
                                </div>

                            </Tab>
                            <Tab eventKey="timings" title="Timings">
                                {timings()}
                            </Tab>

                        </Tabs>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Campus;