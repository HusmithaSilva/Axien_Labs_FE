import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { ToggleModal } from "./Modal";
import { ModalChart } from "./ModalChart";
import { setLoginModalShow } from "./PassProp";
import Chart from "../Dashboard/chart";

import axios from "axios";

export const Tile = () => {
  const DraggableCore = Draggable.DraggableCore;

  const [showLogin, setShowLogin] = useState(false);
  const [showChart, setShowChart] = useState(false);

  return (
    <Draggable>
      <div>
        <div style={{ padding: "1rem", width: "30%" }}>
          <div className="handle1">
            {/* card start here */}
            <div class="card p-3" style={{ width: "18rem;" }}>
              <div classname="card-body handle1">
                <div className="row justify-content-between ">
                  <div className="col-4 ">
                    <h4 class="card-title">Users</h4>
                  </div>
                  <div className="col-4 ms-3 pe-3 ">
                    <button
                      type="button"
                      className="btn btn-outline-primary float-right"
                      onClick={() => setShowChart(true)}
                    >
                      <div className="">
                        <FontAwesomeIcon
                          icon={faSearch}
                          style={{ size: "lg" }}
                        />
                      </div>
                    </button>
                    <ModalChart
                      show={showChart}
                      close={() => setShowChart(false)}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-primary float-right ms-2"
                      onClick={() => setShowLogin(true)}
                    >
                      <div className="">
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ size: "lg" }}
                        />
                      </div>
                    </button>
                    <ToggleModal
                      show={showLogin}
                      close={() => setShowLogin(false)}
                    />
                  </div>
                </div>
                <h6 class="card-subtitle mb-2 text-muted">
                  Users Monthly Details
                </h6>
                <Chart></Chart>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
