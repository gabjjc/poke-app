import React from 'react'
import Navbaritem from './navbaritem';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Poke App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            
            <Navbaritem text='MI ITEM' destination='#'/>

            <Navbaritem text='Features' destination='#'/>

            <Navbaritem text='Pricing' destination='#'/>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
