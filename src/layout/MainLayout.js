import React from "react";
import classes from "./MainLayout.module.css";

const MainLayout = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1>HOMELOGO</h1>
        <span>
          <h2>Cheet Sheet</h2>
          <p>Create a curriculum with lots of notes</p>
        </span>
      </div>
      <div className={classes.body}>{props.children}</div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default MainLayout;
