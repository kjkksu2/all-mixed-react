import React from "react";

import Button from "../ui/Button";
import { test1 } from "./dummy/test1";
import { test2 } from "./dummy/test2";
import { test3 } from "./dummy/test3";
import classes from "./Test.module.css";

const Test = (props) => {
  const firstButtonHandler = () => {
    props.textareaTestHandler(test1);
  };
  const secondButtonHandler = () => {
    props.textareaTestHandler(test2);
  };
  const thirdButtonHandler = () => {
    props.textareaTestHandler(test3);
  };

  return (
    <div className={classes.container}>
      <Button onClick={firstButtonHandler}>테스트1</Button>
      <Button onClick={secondButtonHandler}>테스트2</Button>
      <Button onClick={thirdButtonHandler}>테스트3</Button>
    </div>
  );
};

export default React.memo(Test);
