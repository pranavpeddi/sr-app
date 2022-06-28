import React, { FormEvent, useEffect, useState } from "react";
import "./Mandal.css";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Mandal as mandalEp,
    District as districtEp,
} from "../../../API/Endpoints";
import { useParams } from "react-router-dom";
import { TMandal } from "../../../Interfaces/Mandal";
import TextBox from "../../../components/Textbox/Textbox";
import DropDown from "../../../components/Select/Dropdown";
import { TManageAll } from "../../../Interfaces/ManageAll";
import Label from "../../../components/Label/Label";
import SRModal from "../../../components/SRModal/SRModal";
import { ApiUtil } from "../../../API/apiUtil";

function Mandal() {
    let { id } = useParams();
    let loc = useLocation();
    let apiUtil = new ApiUtil();
    const [isModalClose,closeModal] = useState<boolean>(false);
    const [districts, setDistricts] = useState<TManageAll[]>();
    const [mandalDet, setMandalDet] = useState<TMandal>({
        details: "",
        districtNo: 0,
        id: 0,
        createBy:0,
        createDate:new Date(),
        createTime:new Date(),
        delStat:0,
        impStat:0,
        modifyBy:0,
        modifyDate:new Date(),
        modifyTime:new Date()
    });
    const initValidation = {
        details: "",
        districtNo: "",
        isDistrictValid: "",
        isDetailsValid: ""
    }
    const [validation, setValidation] = useState(initValidation);
    const navigate = useNavigate();

    useEffect(() => {
        getDistricts();
        if (!(loc.pathname === "/addmandal")){
            getMandalDetails();
        }
    }, []);

    const getMandalDetails = async () =>{
        await apiUtil.fetch(mandalEp.getById + id,'Mandal').then((value:any)=>setMandalDet(value));
    }

    const getDistricts = async () => {
        await axios.get(districtEp.getAll).then((value: AxiosResponse) => {
            setDistricts(value.data.value);
        });
    };

    const handleClose = () => {
        closeModal(!isModalClose);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidation(initValidation)

        let validtationObj = initValidation
        let validationSequence = [];

        if (!mandalDet.details)
            validtationObj = { ...validtationObj, details: 'Enter mandal Details', isDetailsValid: 'is-invalid' }
        else
            validationSequence.push(1);

        if (!mandalDet.districtNo)
            validtationObj = { ...validtationObj, districtNo: 'Enter district Details', isDistrictValid: 'is-invalid' }
        else
            validationSequence.push(2);

        console.log(validationSequence)
        for (var i = 0; i < validationSequence.length; i++) {

            switch (validationSequence[i]) {
                case 1:
                    validtationObj = { ...validtationObj, isDetailsValid: 'is-valid' }
                    break;
                case 2:
                    validtationObj = { ...validtationObj, isDistrictValid: 'is-valid' }
                    break;
                default:
                    break;
            }

        }

        setValidation(validtationObj);

        if (validationSequence.length == 2) {
            let postPromise = axios.post(mandalEp.addMandal, mandalDet);
            toast.promise(postPromise, {
                pending:
                    mandalDet.id > 0 ? "Updating Mandal details" : "Saving New Mandal",
                success: "Successfully inserted👌",
                error: "Promise rejected 🤯",
            });
        }

    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        let { id, value } = e.target;

        console.log({ id, value });

        id === "districtNo"
            ? setMandalDet({ ...mandalDet, [id]: Number(value) })
            : setMandalDet({ ...mandalDet, [id]: value });
    };

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
                                onClick={() =>navigate(-1)}
                            >
                                <p id="backbuttontext"></p>
                            </i>
                        </div>
                        <div style={{ paddingLeft: "19px", paddingTop: '5px' }}>Mandal Details</div>
                    </div>
                </h5>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="d-flex mt-4">
                        <div className="details-margin">
                            <Label labelName="Mandal" isMandatory />
                            <TextBox
                                id="details"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    handleChange(e)
                                }
                                placeHolder="mandal details"
                                type="text"
                                value={mandalDet.details}
                                validity={validation.isDetailsValid
                                }

                            />
                            <div className="invalid-feedback">{validation.details}</div>
                        </div>
                        <div>
                            {districts ? (
                                <>
                                    <Label labelName="Districts" isMandatory/>
                                    <DropDown
                                        id="districtNo"
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                            handleChange(e)
                                        }
                                        options={districts}
                                        value={mandalDet.districtNo}
                                        validity={validation.isDistrictValid}
                                    />
                                    <div className="invalid-feedback">{validation.districtNo}</div>
                                </>

                            ) : (
                                <></>
                            )}


                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="form-group d-flex">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                id="btn-save-mandal"
                                value="save"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger ms-2"
                                value="31"
                                id="btn-delete-mandal"
                                onClick={handleClose}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <SRModal endpoint={mandalEp.deleteMandal} handleClose={handleClose} id={mandalDet.id} show={isModalClose} name="mandal" manageAll="mandalManageAll"/>
        </>
    );
}

export default Mandal;
