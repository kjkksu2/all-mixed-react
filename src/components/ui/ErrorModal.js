import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  const backdropHandler = () => props.errorHandler("");

  return <div className={classes.backdrop} onClick={backdropHandler} />;
};

const Modal = (props) => {
  const modalHandler = () => props.errorHandler("");

  return (
    <Card className={classes.modal}>
      <p>{props.error}</p>
      <Button onClick={modalHandler}>닫기</Button>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop errorHandler={props.errorHandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal error={props.error} errorHandler={props.errorHandler} />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default ErrorModal;
