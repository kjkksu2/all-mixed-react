import React, { useEffect, useState } from "react";

import AuditionForm from "./AuditionForm";
import Category from "./Category";
import Test from "./Test";
import useRegex from "../../hooks/useRegex";
import classes from "./Contents.module.css";

const Contents = (props) => {
  const [lists, setLists] = useState(props.lists);
  const [textareaWithTest, setTextareaWithTest] = useState("");
  const [submitTextarea, setSubmitTextarea] = useState("");
  const newLists = useRegex(submitTextarea);

  useEffect(() => {
    if (newLists.length > 0) {
      setLists(newLists);
    }
  }, [newLists]);

  return (
    <div className={classes.container}>
      <Test textareaTestHandler={setTextareaWithTest} />
      <Category lists={lists} />
      <AuditionForm
        submitTextareaHandler={setSubmitTextarea}
        textareaTest={textareaWithTest}
      />
    </div>
  );
};

export default Contents;
