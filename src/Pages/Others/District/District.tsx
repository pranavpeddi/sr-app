import React, { FormEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import {
    State as stateEp,
    District as districtEp,
} from "../../../API/Endpoints";
import { useParams } from "react-router-dom";
import TextBox from "../../../components/Textbox/Textbox";
import DropDown from "../../../components/Select/Dropdown";
import { TManageAll } from "../../../Interfaces/ManageAll";
import Label from "../../../components/Label/Label";
import { TDistrict } from "../../../Interfaces/District";
import SRModal from "../../../components/SRModal/SRModal";

function District() {
    let { id } = useParams();
    let loc = useLocation();
    const navigate = useNavigate();
    const [states, setStates] = useState<TManageAll[]>();
    const [isModalClose, closeModal] = useState<boolean>(false);
    const [districtDet, setDistrictDet] = useState<TDistrict>({
        details: "",
        stateNo: 0,
        id: 0,
    });
    const initValidation = {
        details: "",
        districtNo: "",
        isStateNoValid: "",
        isDetailsValid: ""
    }
    const [validation, setValidation] = useState(initValidation);


    useEffect(() => {

        getStates();
        if (!(loc.pathname === '/adddistrict')) {
            let getPromise = axios
                .get(districtEp.getById + id)
                .then((value: AxiosResponse) => {
                    setDistrictDet(value.data);
                });
            toast.promise(getPromise, {
                pending: "Fetching District Details",
                success: "Here they are 👌",
                error: "Promise rejected 🤯",
            });
        }

    }, []);

    const getStates = async () => {
        await axios.get(stateEp.getAll).then((value: AxiosResponse) => {
            setStates(value.data.value);
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

        if (!districtDet.details)
            validtationObj = { ...validtationObj, details: 'Enter District Details', isDetailsValid: 'is-invalid' }
        else
            validationSequence.push(1);

        if (!districtDet.stateNo)
            validtationObj = { ...validtationObj, districtNo: 'Enter State Details', isStateNoValid: 'is-invalid' }
        else
            validationSequence.push(2);

        for (var i = 0; i < validationSequence.length; i++) {

            switch (validationSequence[i]) {
                case 1:
                    validtationObj = { ...validtationObj, isDetailsValid: 'is-valid' }
                    break;
                case 2:
                    validtationObj = { ...validtationObj, isStateNoValid: 'is-valid' }
                    break;
                default:
                    break;
            }

        }
        setValidation(validtationObj);

        if (validationSequence.length == 2) {


            let postPromise = axios.post(districtEp.addDistrict, districtDet);
            toast.promise(postPromise, {
                pending:
                    districtDet.id > 0 ? "Updating District details" : "Saving New District",
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

        id === "stateNo"
            ? setDistrictDet({ ...districtDet, [id]: Number(value) })
            : setDistrictDet({ ...districtDet, [id]: value });
    };

    return (
        <div className="subject-categories-form">
            <h5>
                <div className="d-flex">
                    <div style={{ paddingLeft: "10px" }}>
                        <i
                            className="fa fa-angle-left back-but"
                            style={{ cursor: "pointer" }}
                            id="back-button-mandal"
                            fa-lg=""
                            onClick={() => navigate(-1)}
                        >
                            <p id="backbuttontext"></p>
                        </i>
                    </div>
                    <div style={{ paddingLeft: "19px" }}>District Details</div>
                </div>
            </h5>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="d-flex mt-4">
                    <div className="details-margin">
                        <Label labelName="District" />
                        <TextBox
                            id="details"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleChange(e)
                            }
                            placeHolder="District details"
                            type="text"
                            value={districtDet.details}
                            validity={validation.isDetailsValid
                            }

                        />
                        <div className="invalid-feedback">{validation.details}</div>
                    </div>
                    <div>
                        {states ? (
                            <>
                                <Label labelName="State" />
                                <DropDown
                                    id="stateNo"
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                        handleChange(e)
                                    }
                                    options={states}
                                    value={districtDet.stateNo}
                                    validity={validation.isStateNoValid}
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
            <SRModal endpoint={districtEp.deleteDistrict} handleClose={handleClose} id={districtDet.id} show={isModalClose} name="District" manageAll="districtManageAll" />
        </div>
    );
}

export default District;
