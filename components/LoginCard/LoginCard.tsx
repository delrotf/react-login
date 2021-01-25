
import React from "react";
import { LoginForm } from "..";

const LoginCard = props => {
  return (
    <div className="form-card border">
      <div className="header text-center p-2 text-light">Create table</div>
      <div>
        <LoginForm {...props} />
      </div>
    </div>
  );
};

export { LoginCard };
