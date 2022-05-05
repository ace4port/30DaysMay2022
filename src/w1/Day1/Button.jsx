import React from "react";
import { ReactComponent as Loader } from "../../assets/Spinner1s200px.svg";
import "./day1.scss";

const Button = ({ variant, size, loading, className, children }) => {
  return (
    <button
      className={`button button-${variant} button-${size} ${
        loading && "button-loading"
      } ${className}`}
      disabled={!loading}
    >
      {!loading ? children : <Loader />}
    </button>
  );
};

export default Button;

export const IconButton = ({ children }) => (
  <Button className="button-icon">{children}</Button>
);
