import React, { FormEvent, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { State as state } from "../../../API/Endpoints";
import { useParams } from "react-router-dom";
import { TState } from "../../../Interfaces/State";
import TextBox from "../../../components/Textbox/Textbox";
import Label from "../../../components/Label/Label";
import SRModal from "../../../components/SRModal/SRModal";

function State() {
  let { id } = useParams();
  let loc = useLocation();
  let navigate = useNavigate();
  const [isModalClose, closeModal] = useState<boolean>(false);

  useEffect(() => {
    console.log(loc);
    if (!(loc.pathname === "/addstate")) {
      let getPromise = axios
        .get(state.getById + id)
        .then((value: AxiosResponse) => {
          setStateDet(value.data);
        });

      toast.promise(getPromise, {
        pending: "Fetching State Details",
        success: "Here they are 👌",
        error: "Promise rejected 🤯",
      });
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stateDet.details) {
      setValidation("Enter State Details");
      setInValid('error');
    } else {
      let postPromise = axios.post(state.addState, stateDet);

      toast.promise(postPromise, {
        pending:
          stateDet.id > 0 ? "Updating State details" : "Saving New State",
        success: "Successfully inserted👌",
        error: "Promise rejected 🤯",
      });
    }
  };

  const [stateDet, setStateDet] = useState<TState>({
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
    setStateDet({ ...stateDet, [id]: value });
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
          <div style={{ paddingLeft: "19px" }}>State Details</div>
        </div>
      </h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="d-flex mt-4">
          <div>
            <Label labelName="State" />
            <TextBox
              id="details"
              validity={validation}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              placeHolder="state details"
              type="text"
              value={stateDet.details}
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
      <SRModal endpoint={state.deleteState} handleClose={handleClose} id={stateDet.id} show={isModalClose} name="State" manageAll="stateManageALL" />
    </div>
  );
}

export default State;
