import React, { useEffect, useState } from "react";

import Card from "../ui/Card";
import Button from "../ui/Button";
import classes from "./AuditionForm.module.css";

const AuditionForm = (props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(props.textareaTest);
  }, [props.textareaTest]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.submitTextareaHandler(text);
    setText("");
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Card>
        <textarea
          placeholder="입력해주세요."
          value={text}
          onChange={textHandler}
        />
      </Card>
      <Button type="submit">추출</Button>
    </form>
  );
};

export default React.memo(AuditionForm);
