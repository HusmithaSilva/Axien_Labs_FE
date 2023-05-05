import React, { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "../Dashboard/chart";

export const ModalChart = (props) => {
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
            User Monthly detail Chart
          </Modal.Title>
          <CloseButton onClick={props.close}>
            {/* <FontAwesomeIcon icon={faEllipsisV} style={{ size: "lg" }} /> */}
          </CloseButton>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <Chart></Chart>
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
