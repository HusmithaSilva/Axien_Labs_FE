import React, { useState, useEffect } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "../Dashboard/chart";
import axios from "axios";

//parent of display user in chart
export const ModalChart = (props) => {
  // const [users, getUsers] = useState("");
  // //where data of users fetch from
  // const url = "http://localhost:8081/api/user/all";

  // //getting all users axios post request
  // const getAllUsers = () => {
  //   axios
  //     .get(`${url}`)
  //     .then((Response) => {
  //       const AllUsers = Response.data.users.AllUsers;
  //       getUsers(AllUsers);
  //     })
  //     .catch((error) => {
  //       console.error(`Error: ${error}`);
  //     });
  // };

  // useEffect(() => {
  //   getAllUsers();
  // }, []);

  //modal starts here
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
          </CloseButton>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              {/* import chart  */}
              <Chart ></Chart>
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
