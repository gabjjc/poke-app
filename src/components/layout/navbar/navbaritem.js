import React from 'react'

const Navbaritem = ({text, destination, active = false}) => {
  return (
    <li className="nav-item">
      <a className="nav-link " aria-current="page" href="{destination}">
        {text}
      </a>
    </li>
  );
}

export default Navbaritem