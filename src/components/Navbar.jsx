// import { useState } from "react";
import classes from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

let element = <FontAwesomeIcon icon={faAngleDown} />;

const Navbar = () => {
  // const [down, setDown] = useState(element);
  // const HandleMouseOver = () => {};
  return (
    <nav className={classes.navbar}>
      <span className={classes.navLogo}>
        <img src="./deskpass.png" alt="" />
      </span>
      <div className={classes.navElement}>
        <div>
          <span>Find Spaces {element}</span>
        </div>
        <div>
          <span> Solutions {element}</span>
        </div>
        <div>
          <span> Pricing</span>
        </div>
        <div>
          <span>Resources {element}</span>
        </div>
      </div>
      <div className={classes.accounts}>
        <div className={classes.signUp}>
          <span>Get Started </span>
        </div>
        <span> or </span>
        <div className={classes.login}>
          <span> Login </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
