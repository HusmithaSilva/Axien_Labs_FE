import React, { useState } from "react";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { modal } from "./Modal";

export const Tile = () => {
  const DraggableCore = Draggable.DraggableCore;

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  //   const eventHandler = (e, data) => {
  //     console.log("Event Type", e.type);
  //     console.log({ e, data });
  //   };

  const eventHandler1 = (e1, data1) => {
    console.log("Event Type", e1.type);
    console.log({ e1, data1 });
  };

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
                    <h5 class="card-title">Card title</h5>
                  </div>
                  <div className="col-2 ms-3 pe-3 ">
                    <button
                      type="button"
                      className="btn btn-outline-primary float-right"
                      onClick={toggleModal}
                    >
                      <div className="">
                        <FontAwesomeIcon
                          icon={faEllipsisV}
                          style={{ size: "lg" }}
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};
