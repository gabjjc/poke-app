import { React, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFetchData } from "./customHooks/useFetchData";
import CurrentPokemonContext from "../components/CustomContext";
import Accordion from "./Accordion";
import { redirect } from "react-router-dom";

const Modals = ({ show, handleClose, selected }) => {
  // obtener Los datos
  const endpoint = "https://pokeapi.co/api/v2/pokemon/" + selected + "/";

  const { data, loading, error } = useFetchData(endpoint);

  const { setCurrentPokemon } = useContext(CurrentPokemonContext);

  const handleSelect = () => {
    setCurrentPokemon(data);
    handleClose();
    return redirect("/Features")
    // return <Navigate to="/Features" />;
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
        <div>
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
