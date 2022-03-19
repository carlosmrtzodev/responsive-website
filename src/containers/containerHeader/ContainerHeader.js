import React from "react";

const ContainerHeader = ({ children }) => {
  return (
    <>
      <div className="gradient__bg">{children}</div>
    </>
  );
};

export default ContainerHeader;
