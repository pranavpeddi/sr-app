import React, { FormEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { ClassSection  as classSectionEp} from "../../../API/Endpoints";
import { useParams } from "react-router-dom";
import { TClassSection } from "../../../Interfaces/ClassSection";
import TextBox from "../../../components/Textbox/Textbox";
import Label from "../../../components/Label/Label";
import SRModal from "../../../components/SRModal/SRModal";

function ClassSection() {
  let { id } = useParams();
  let loc = useLocation();
  let navigate = useNavigate();
  const [isModalClose, closeModal] = useState<boolean>(false);

  useEffect(() => {
    console.log(loc);
    if (!(loc.pathname === "/addclasssection")) {
      let getPromise = axios
        .get(classSectionEp.getById + id)
        .then((value: AxiosResponse) => {
          setClassSectionDet(value.data);
        });

      toast.promise(getPromise, {
        pending: "Fetching Class section Details",
        success: "Here they are 👌",
        error: "Promise rejected 🤯",
      });
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!classSectionDet.details) {
      setValidation("Enter Class Section Details");
      setInValid('error');
    } else {
      let postPromise = axios.post(classSectionEp.addClassSection, classSectionDet);

      toast.promise(postPromise, {
        pending:
          classSectionDet.id > 0 ? "Updating Class section details" : "Saving Class section Category",
        success: "Successfully inserted👌",
        error: "Promise rejected 🤯",
      });
    }
  };

  const [classSectionDet, setClassSectionDet] = useState<TClassSection>({
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
    setClassSectionDet({ ...classSectionDet, [id]: value });
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
          <div style={{ paddingLeft: "19px" }}>Class Section Details</div>
        </div>
      </h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex mt-4">
          <div>
            <Label labelName="Class Section" />
            <TextBox
              id="details"
              validity={validation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              placeHolder="class Section details"
              type="text"
              value={classSectionDet.details}
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
      <SRModal endpoint={classSectionEp.deleteClassSection} handleClose={handleClose} id={classSectionDet.id} show={isModalClose} name="Class Section" manageAll="classsectionmanageall" />
    </div>
  );
}

export default ClassSection;
