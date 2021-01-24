import { Form } from "react-bootstrap";
import React from "react";

const FormControlFeedback = props => {
  return (
    <small className="form-text text-danger">
      {props.children}
    </small>
  );
};

export { FormControlFeedback };
