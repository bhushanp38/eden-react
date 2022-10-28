import React from "react";

const Heading = ({ title1, title2 }) => {
  return (
    <>
      {/* heading */}
      <div className="text-center mb-4">
        <h3 className="mb-3">{title1}</h3>
        <p className="mb-3">{title2}</p>
      </div>
    </>
  );
};

export default Heading;
