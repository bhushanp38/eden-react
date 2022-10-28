import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const SiteButton = ({ title, onClick, to }) => {
  return (
    <>
      <Link to={to}>
        <Button className="w-100 py-2 mt-2 bg-primary" onClick={onClick}>
          {title}
        </Button>
      </Link>
    </>
  );
};
export default SiteButton;
