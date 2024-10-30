import React from "react";
import { Link } from "react-router-dom";

const Navbaritem = ({ text, destination, active = false }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={destination}>{text}</Link>
    </li>
  );
};

export default Navbaritem;
