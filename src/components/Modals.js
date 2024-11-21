import { React, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFetchData } from "./customHooks/useFetchData";
import CurrentPokemonContext from "../components/CustomContext";
import Accordion from "./Accordion";
import { useNavigate } from "react-router-dom";

const Modals = ({ show, handleClose, selected }) => {
  // obtener Los datos
  const endpoint = "https://pokeapi.co/api/v2/pokemon/" + selected + "/";
  const navigate = useNavigate(); // al inicio del componente, como todo hook

  const { data, loading, error } = useFetchData(endpoint);

  const { setCurrentPokemon } = useContext(CurrentPokemonContext);

  const handleSelect = () => {
    setCurrentPokemon(data);
    handleClose();
    navigate("/Features/"+ selected) // esto dentro de tu funcion
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> {data.name} ! </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          alt={data.name}
          height={150}
          width={150}
          />
        </div>
       <Accordion pokemon={data}/>
       </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSelect}>
          Select Pokemon
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
