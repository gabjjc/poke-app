import React from 'react'
import Navbaritem from './navbaritem';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href='/#'>
          Poke App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            
            <Navbaritem text='Home' destination='/'/>

            <Navbaritem text='Features' destination='/Features'/>

            <Navbaritem text='Match' destination='/Match'/>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
