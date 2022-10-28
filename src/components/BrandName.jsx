import React from "react";
import { Eden } from "../assets";

const BrandName = ({ className }) => {
  return (
    <>
      {/* logo and title */}
      <div className="d-flex justify-content-center">
        <div>
          <img src={Eden} alt="" width={40} />
        </div>
        <div className="d-flex align-self-center m-1">
          <h2>Eden</h2>
        </div>
      </div>
    </>
  );
};

export default BrandName;
