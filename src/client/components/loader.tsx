import React from "react";

const Loader = ({ loading, children }) => {
  return <div>{loading && <div>{children}</div>}</div>;
};

export default Loader;
