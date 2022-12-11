import React from "react";
import classes from "../styles/SearchSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

let element = <FontAwesomeIcon icon={faAngleDown} />;
const SearchSection = () => {
  return (
    <section className={classes.SearchSection}>
      <div className={classes.HomeSection}>
        <p>work from <span className={classes.text}>anywhere.</span></p>
        <strong>
          We connect people to the amazing &nbsp;<span className={classes.Work}>workspaces</span> &nbsp;they need today...
        </strong>
        <strong>
          to help companies create the hybrid &nbsp;<span className={classes.Work}>workplaces</span>&nbsp; of tomorrow.
        </strong>
        <div className={classes.Search}>
          <span className={classes.Find}>Find</span>
          <span className={classes.Meeting}>Meeting Rooms {element}</span>
          <span className={classes.In}>in</span>
          <span className={classes.City}>Aberdeen {element}</span>
          <div className={classes.SeeMore}>
            <span>See More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
