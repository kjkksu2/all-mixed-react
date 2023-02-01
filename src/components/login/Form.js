import React, { useContext, useRef, useState } from "react";

import Button from "../ui/Button";
import Input from "../ui/Input";
import AuthContext from "./store/AuthContext";
import classes from "./Form.module.css";
import ErrorModal from "../ui/ErrorModal";

const Form = () => {
  const ctx = useContext(AuthContext);
  const [error, setError] = useState("");
  const idRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    if (id.length === 0) {
      idRef.current.focus();
      return setError("아이디를 적어주세요.");
    }

    if (password.length === 0) {
      passwordRef.current.focus();
      return setError("비밀번호를 적어주세요.");
    }

    ctx.login();
  };

  return (
    <>
      {error && <ErrorModal error={error} errorHandler={setError} />}
      <form className={classes.form} onSubmit={submitHandler}>
        <h1>더미 로그인</h1>
        <Input ref={idRef} input={{ type: "text", placeholder: "아이디" }} />
        <Input
          ref={passwordRef}
          input={{ type: "password", placeholder: "비밀번호" }}
        />
        <Button type="submit">로그인</Button>
      </form>
    </>
  );
};

export default Form;
