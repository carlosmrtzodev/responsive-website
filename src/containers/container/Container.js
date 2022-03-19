import "./container.css";
import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="App">{children}</div>
    </>
  );
};

export default Container;
