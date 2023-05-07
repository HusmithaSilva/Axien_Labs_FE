import React, { useState, useEffect } from "react";
import { CloseButton, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@material-ui/core/Button";
import Chart from "../Dashboard/chart";
import axios from "axios";
import { Bar } from "react-chartjs-2";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//parent of display user in chart
export const ModalChart = (props) => {
  const Endpoint = "http://localhost:8081/api/user/all";
  const [user, setUser] = useState([]);
  const getUserList = async () => {
    try {
      const fetchData = await axios.get(Endpoint, {
        headers: {
          // authorization: "Bearer JWT Token",
        },
      });
      setUser(fetchData.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("load", getUserList);
    return () => {
      window.removeEventListener("load", getUserList);
    };
  }, [user]);

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
          <CloseButton onClick={props.close}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              {/* import charts */}
              {/* bars shows in modal */}
              <Bar
                data={{
                  // Name of the variables on x-axies for each bar
                  labels: user.map((user) => [`${user.name}`]),
                  datasets: [
                    {
                      // Label for bars
                      label: "User price details",
                      // Data or value of your each variable
                      data: user.map((user) => [`${user.price}`]),
                      // Color of each bar
                      backgroundColor: ["aqua"],
                      // Border color of each bar
                      borderColor: ["aqua"],
                      borderWidth: 0.5,
                    },
                  ],
                }}
                // Height of graph
                height={300}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          // The y-axis value will start from zero
                          beginAtZero: true,
                        },
                      },
                    ],
                  },
                  legend: {
                    labels: {
                      fontSize: 15,
                    },
                  },
                }}
              />
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
