import React from 'react'

const Navbaritem = ({text, destination, active = false}) => {
  return (
    <li class="nav-item">
      <a class="nav-link " aria-current="page" href="{destination}">
        {text}
      </a>
    </li>
  );
}

export default Navbaritem