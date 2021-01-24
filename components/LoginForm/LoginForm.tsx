import { Formik, Form } from "formik";
import React from "react";
import { useState } from "react";
import { Button, Form as BsForm } from "react-bootstrap";
import * as Yup from "yup";
import { Input } from "..";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: ""
  });
  const validationSchema = Yup.object({
    firstname: Yup.string().required("This field is required.")
  });
  const onSubmit = values => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form>
          <BsForm>
            <BsForm.Row>
              <Input
                name="firstname"
                type="text"
                label="Firstname"
                hint="firstname"
                placeholder="Firstname"
              />
              <Input
                name="lastname"
                type="text"
                label="Lastname"
                hint="Lastname"
                placeholder="Lastname"
              />
            </BsForm.Row>
            <BsForm.Row>
              <Input
                name="email"
                type="email"
                label="Email"
                hint="email"
                placeholder="Email"
              />
              <Input
                name="password"
                type="password"
                label="Password"
                hint="password"
                placeholder="Password"
              />
            </BsForm.Row>
          </BsForm>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { LoginForm };
