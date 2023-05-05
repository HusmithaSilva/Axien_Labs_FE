import React, { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ToggleModal = (props) => {

  console.log("PROPS in MODAL", props);
  return (
    <>
      <Modal
        show={props.show}
        cancel={props.close}
        // onHide={setLoginModalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Tile
          </Modal.Title>
          <CloseButton onClick={props.close}>
            {/* <FontAwesomeIcon icon={faEllipsisV} style={{ size: "lg" }} /> */}
          </CloseButton>
        </Modal.Header>
        <Modal.Body>
          <div className="row justify-content-between">
            <div className="col-5">
              <h4>Are you sure to Delete?</h4>
            </div>
            <div className="col-3 ms-5 ps-5">
              <Button className="" variant="contained" color="error"  fullWidth={true}>
                Delete
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
