import React from "react";

import CategoryItem from "./CategoryItem";
import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <ul className={classes.ul}>
      {props.lists.map((v, i) => (
        <CategoryItem key={i} category={v.category} content={v.content} />
      ))}
    </ul>
  );
};

export default Category;
