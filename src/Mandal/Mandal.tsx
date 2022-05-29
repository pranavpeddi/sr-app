import React, { FormEvent, useEffect, useState } from "react";
import './Mandal.css'
import axios, { AxiosResponse } from "axios";
import { toast } from 'react-toastify';

export interface TMandal {
    id: number;
    details: string;
    districtNo: number;
}

function Mandal() {

    useEffect(()=>{
        let search : string= window.location.search
        let getPromise = axios.get(`http://localhost:5000/Mandal/GetCompDataById?userId=3&id=${search.substring(4,6)}&getDetInUseStat=false&retInvalidIdMsg=true&getRelDetFromView=false`).then((value:AxiosResponse)=>{
            setMandalDet(value.data)
        })

        toast.promise(
            getPromise,
            {
              pending: 'Fetching Mandal Details',
              success: 'Here they are 👌',
              error: 'Promise rejected 🤯'
            }
        )
        console.log(search.substring(4,6))
    },[])

    const [mandalDet, setMandalDet] = useState<TMandal>({
        details: "",
        districtNo: 0,
        id: 0
    });
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let postPromise = axios.post('http://localhost:5000/Mandal/SaveWithCompData?userId=3', mandalDet);

        toast.promise(postPromise,{
            pending: mandalDet.id > 0 ? 'Updating Mandal details' : 'Saving New Mandal',
            success:'Successfully inserted👌',
            error: 'Promise rejected 🤯'
          })

    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target
        console.log(id, value)
        console.log({ id, value })


        setMandalDet({ ...mandalDet, [id]: value })
    }


    return (

        <div className="subject-categories-form">
            <h5>
                <div className="d-flex">
                    <div style={{ paddingLeft: '10px' }}>
                        <i className="fa fa-angle-left back-but" style={{ cursor: "pointer" }} id="back-button-mandal" fa-lg=""><p id="backbuttontext"></p></i>
                    </div>
                    <div style={{ paddingLeft: '19px' }}>
                        Mandal Details
                    </div>
                </div>
            </h5>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row mt-2">
                    <div className="form-group col-md-4 ">


                        <input className="form-control" id="details" name="Details" placeholder="Mandal Details" required type="text" value={mandalDet?.details} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} />
                    </div>
                    <div className="form-group col-md-4">


                        <select name="Districts" className="form-control ddlDistrict" id="districtNo" required value={mandalDet?.districtNo} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}>
                            <option value="">Select District</option>
                            <option value="26">HANAMKONDA</option>
                            <option value="10">HYDERABAD</option>
                            <option value="25">KARIMNAGAR</option>
                            <option value="28">KHAMMAM</option>
                            <option value="29">KOTHAGUDEM</option>
                            <option value="19">KURNOOL</option>
                            <option value="9">MULUGU</option>
                            <option value="27">NALGONDA</option>
                            <option value="16">NELLORE</option>
                            <option value="24">NIZAMABAD</option>
                            <option value="33">PUNE</option>
                            <option value="35">TESTING</option>
                            <option value="17">VIJAYAWADA</option>
                            <option value="6">VIZAG</option>
                            <option value="7" selected>WARANGAL</option>
                        </select>
                    </div>

                </div>
                <input data-val="true" data-val-number="The field Id must be a number." data-val-required="The Id field is required." id="Id" name="Id" type="hidden" value="31" />
                <div className="row">

                    <div className="form-group d-flex mt-3">
                        <button className="btn btn-primary" type="submit" id="btn-save-mandal" value="save">Save</button>
                        <button type="button" className="btn btn-danger ms-2" value="31" id="btn-delete-mandal">Delete</button>

                    </div>
                </div>
            </form>

        </div>
    )
}

export default Mandal;