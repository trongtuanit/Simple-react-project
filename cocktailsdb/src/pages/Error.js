import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error">
      <h1 className="error-message">Oops! It's a dead end</h1>
      <Link className="back-home-btn" to="/">
        Back to home
      </Link>
    </div>
  );
};

export default Error;
