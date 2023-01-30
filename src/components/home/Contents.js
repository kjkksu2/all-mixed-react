import React from "react";

import ContentsItem from "./ContentsItem";
import classes from "./Contents.module.css";

const Contents = (props) => {
  return (
    <ul className={classes.ul}>
      {props.lists.map((v, i) => (
        <ContentsItem key={i} title={v.title} description={v.description} />
      ))}
    </ul>
  );
};

export default Contents;
