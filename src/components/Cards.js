import {React, useState} from 'react'
import Modals from "../components/Modals";

const Cards = ({ url, name }) => {

  const [show, setShow] = useState(false);
    
    //Ventana modal

    const handleClose = () => setShow(false);
    const [selected, setSelected] = useState(null);
  
    const handleSelect = (id) => {
      setShow(true);
      setSelected(id);
    };

  return (
    <>

<div key={url} className="col">
    <a href="#">
      <div className="card text-dark" onClick={ () => handleSelect(url.match(/\/(\d+)\/$/)?.[1])}>
      
      <h1> {name}</h1>
        <div className="card-body">
          
          <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url.match(/\/(\d+)\/$/)?.[1]}.png`}
        alt={name}
        height={150}
        width={150}
        className="card-img" /> 
        </div>
        
      </div>
      </a>  
    </div>

    
    {show && (
        <Modals show={show} handleClose={handleClose} selected={selected} />
      )}
    </>
    
  )
}

export default Cards