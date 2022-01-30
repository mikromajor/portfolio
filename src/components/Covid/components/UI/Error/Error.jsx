import React from "react";
import "./Error.scss";

const Error = ({ label }) => {
  return <h2 className={"warning"}>{label}</h2>;
};

export default Error;
