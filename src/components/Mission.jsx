import React from "react";
import classes from "../styles/Mission.module.css";

const Mission = () => {
  return (
    <section className={classes.Mission}>
      <div className={classes.Container}>
        <span className={classes.Title}>Our Mission Is Simple</span>
        <div className={classes.images}>
          <img src="mission-1.png" alt="" />
          <img src="mission-2.png" alt="" />
          <img src="mission-3.png" alt="" />
        </div>
        <div className={classes.description}>
          <div className={classes.shortDescriptionOne}>
            <span>Ensure everyone can find space</span>
          </div>
          <div className={classes.shortDescriptionTwo}>
            <span>instantly to get their best work done.</span>
          </div>

          <div className={classes.shortDescriptionThree}>
            <span>
              If you need space today, you need a huge range of options that can
              be reserved simply and efficiently. If you need to offer flexible
              work benefits to all your team members, you need our simple
              solution for teams of any size.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
