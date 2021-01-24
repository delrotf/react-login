import { Formik, Form } from "formik";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import { Input } from "../Input";

const FormikForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: ""
  });
  const validationSchema = Yup.object({
    firstname: Yup.string().required("This field is required.")
  });
  const onSubmit = values => {
    console.log('values', values)
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <Input
            name="firstname"
            type="text"
            label="Firstname"
            hint="fir"
            placeholder="asdf"
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { FormikForm };
