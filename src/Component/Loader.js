import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <i
        className="fas fa-spinner fa-4x fa-spin"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      />
    </div>
  );
};

export default Loader;
