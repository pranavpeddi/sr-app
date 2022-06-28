import React, { FormEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { CourseCategory as courseCategoryEp } from "../../../API/Endpoints";
import { useParams } from "react-router-dom";
import { CourseCategory as TCourseCategory } from "../../../Interfaces/CourseCategory";
import TextBox from "../../../components/Textbox/Textbox";
import Label from "../../../components/Label/Label";
import SRModal from "../../../components/SRModal/SRModal";

function CourseCategory() {
    let { id } = useParams();
    let loc = useLocation();
    let navigate = useNavigate();
    const [isModalClose, closeModal] = useState<boolean>(false);

    useEffect(() => {
        console.log(loc);
        if (!(loc.pathname === "/addcoursecategory")) {
            let getPromise = axios
                .get(courseCategoryEp.getById + id)
                .then((value: AxiosResponse) => {
                    setCourseCategoryDet(value.data);
                });

            toast.promise(getPromise, {
                pending: "Fetching Course Category Details",
                success: "Here they are 👌",
                error: "Promise rejected 🤯",
            });
        }
    }, []);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!courseCategoryDet.details) {
            setValidation("Enter Course Category Details");
            setInValid('error');
        } else {
            let postPromise = axios.post(courseCategoryEp.addCourseCat, courseCategoryDet);

            toast.promise(postPromise, {
                pending:
                    courseCategoryDet.id > 0 ? "Updating Course Category details" : "Saving Course Category",
                success: "Successfully inserted👌",
                error: "Promise rejected 🤯",
            });
        }
    };

    const [courseCategoryDet, setCourseCategoryDet] = useState<TCourseCategory>({
        details: "",
        id: 0,
        workload1: 0,
        workloadWt1: 0
    });

    const handleClose = () => {
        closeModal(!isModalClose);
    }
    const [isInvalid, setInValid] = useState<string>("");
    let initValidation = {
        details:''
    };
    const [validation, setValidation] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setCourseCategoryDet({ ...courseCategoryDet, [id]: value });
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
                    <div style={{ paddingLeft: "19px" }}>Course Category Details</div>
                </div>
            </h5>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="d-flex mt-4">
                    <div>
                        <Label labelName="Course Category" isMandatory/>
                        <TextBox
                            id="details"
                            validity={validation}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleChange(e)
                            }
                            placeHolder="course category details"
                            type="text"
                            value={courseCategoryDet.details}
                        />
                        <div className="invalid-feedback">{validation}</div>
                    </div>

                </div>
                <div className="d-flex mt-4">
                    <div>
                        <Label labelName="Theory" isMandatory />
                        <TextBox
                            id="workload1"
                            validity={validation}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleChange(e)
                            }
                            placeHolder="Theory"
                            type="number"
                            value={courseCategoryDet.workload1}
                        />
                        <div className="invalid-feedback">{validation}</div>
                        
                    </div>
                    <div>
                        <Label labelName="Workload Weight" isMandatory/>
                        <TextBox
                            id="workloadWt1"
                            validity={validation}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleChange(e)
                            }
                            placeHolder="work load weight 1"
                            type="text"
                            value={courseCategoryDet.workloadWt1}
                        />
                        <div className="invalid-feedback">{validation}</div>
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
            <SRModal endpoint={courseCategoryEp.deleteCourseCat} handleClose={handleClose} id={courseCategoryDet.id} show={isModalClose} name="Course category" manageAll="coursecategorymanageall" />
        </div>
    );
}

export default CourseCategory;
