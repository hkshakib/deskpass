import React from "react";
import classes from '../styles/Container.module.css'
import SearchSection from "./SearchSection.jsx";

const Container =()=>{
    return(
        <div className={classes.Container}>
           <SearchSection></SearchSection>
        </div>
    );
}

export default Container;