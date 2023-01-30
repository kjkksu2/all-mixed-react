import React from "react";

import classes from "./ContentsItem.module.css";

const Item = (props) => {
  return (
    <li className={classes.li}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </li>
  );
};

export default Item;
