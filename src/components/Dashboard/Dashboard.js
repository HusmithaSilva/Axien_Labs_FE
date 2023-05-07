import React from "react";

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
