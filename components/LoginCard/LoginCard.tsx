import React from "react";
import { LoginForm } from ".";
import { FormikForm } from "./";
import styles from "./LoginCard.module.scss";

const LoginCard = () => {
  return (
    <div className="p-3">
      <FormikForm />
    </div>
  );
};

export { LoginCard };
