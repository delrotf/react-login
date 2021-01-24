import React from "react";
import { Col, Form } from "react-bootstrap";
import { Field, ErrorMessage } from "formik";
import { FormControlFeedback } from "..";

const Input = props => {
  const { controlId, label, name, type, placeholder, hint, ...rest } = props;

  return (
    <Form.Group as={Col} controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Field name={name}>
        {props => {
          const { field, meta } = props;
          return (
            <React.Fragment>
              <Form.Control
                type={type}
                placeholder={placeholder}
                {...field}
              />
              {!meta.error && <Form.Text muted>{hint}</Form.Text>}
            </React.Fragment>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FormControlFeedback} />
    </Form.Group>
  );
};

export { Input };
