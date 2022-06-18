import axios, { AxiosResponse } from "axios";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

interface ModalProps {
    show: boolean;
    handleClose: () => void;
    endpoint: string;
    id: number;
    name: string;
    manageAll: string;
}

function SRModal({ show, handleClose, endpoint, id, name, manageAll }: ModalProps) {

    let his = useNavigate();

    const DeleteItem = () => {
        axios.post(endpoint + id).then((response: AxiosResponse<any, any>) => {
            if (response.data === true) {
                handleClose();
                toast.success('Deleted Successfully')
                his(-1);
            }
            else{
                toast.warn(response.data); 
                handleClose();   
            }
        }).catch((err) => {
            handleClose();
            toast.warn(err);
        })
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title> Delete {name} </Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to Delete ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={DeleteItem}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SRModal;
