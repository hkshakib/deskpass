import React from "react";
import classes from "../styles/Container.module.css";
import SearchSection from "./SearchSection.jsx";
import Mission from "./Mission.jsx";
import Featured from "./Featured";

const Container = () => {
  return (
    <div className={classes.Container}>
      <SearchSection></SearchSection>
      <Mission></Mission>
      <Featured></Featured>
    </div>
  );
};

export default Container;
