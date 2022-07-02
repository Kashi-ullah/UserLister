import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";
const ErrorModel = (props) => {
  return (
    <div>
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.input}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.footer}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
