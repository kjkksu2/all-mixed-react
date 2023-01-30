import React from "react";

import Card from "../ui/Card";
import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <li className={classes.li}>
      <span>{props.category}</span>
      <Card>
        <p>{props.content}</p>
      </Card>
    </li>
  );
};

export default CategoryItem;
