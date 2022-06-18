import React, { FormEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { SubjectCategory  as subjectCategory} from "../../../API/Endpoints";
import { useParams } from "react-router-dom";
import { TSubjectCat } from "../../../Interfaces/SubjectCategory";
import TextBox from "../../../components/Textbox/Textbox";
import Label from "../../../components/Label/Label";
import SRModal from "../../../components/SRModal/SRModal";

function SubjectCategory() {
  let { id } = useParams();
  let loc = useLocation();
  let navigate = useNavigate();
  const [isModalClose, closeModal] = useState<boolean>(false);

  useEffect(() => {
    console.log(loc);
    if (!(loc.pathname === "/addsubjectcategory")) {
      let getPromise = axios
        .get(subjectCategory.getById + id)
        .then((value: AxiosResponse) => {
          setSubjectCatDet(value.data);
        });

      toast.promise(getPromise, {
        pending: "Fetching Subject category Details",
        success: "Here they are 👌",
        error: "Promise rejected 🤯",
      });
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!subjcetCatDet.details) {
      setValidation("Enter Subject Category Details");
      setInValid('error');
    } else {
      let postPromise = axios.post(subjectCategory.addSubjectCategory, subjcetCatDet);

      toast.promise(postPromise, {
        pending:
          subjcetCatDet.id > 0 ? "Updating Subject Category details" : "Saving New Subject Category",
        success: "Successfully inserted👌",
        error: "Promise rejected 🤯",
      });
    }
  };

  const [subjcetCatDet, setSubjectCatDet] = useState<TSubjectCat>({
    details: "",
    id: 0,
  });

  const handleClose = () => {
    closeModal(!isModalClose);
  }
  const [isInvalid, setInValid] = useState<string>("");
  const [validation, setValidation] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setSubjectCatDet({ ...subjcetCatDet, [id]: value });
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
          <div style={{ paddingLeft: "19px" }}>Subject Category Details</div>
        </div>
      </h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex mt-4">
          <div>
            <Label labelName="Subject Category" />
            <TextBox
              id="details"
              validity={validation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              placeHolder="Subject category details"
              type="text"
              value={subjcetCatDet.details}
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
      <SRModal endpoint={subjectCategory.deleteSubjectCategory} handleClose={handleClose} id={subjcetCatDet.id} show={isModalClose} name="Subject Category" manageAll="subjectcategorymanageall" />
    </div>
  );
}

export default SubjectCategory;
