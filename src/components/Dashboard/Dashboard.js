import React from "react";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";

import { Tile } from "./Tile";
//dashboard function
//most parent node in dashboard
export const Dashboard = () => {
  return (
    <div>
      {/* Tile child components calls here */}
      <Tile />
      {/* <Tile /> */}
    </div>
  );
};
