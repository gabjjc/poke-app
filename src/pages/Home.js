import React, {useState, useContext } from "react";
import { useFetchData  } from "../components/customHooks/useFetchData";
import Modals from "../components/Modals";
import  CurrentPokemonContext  from "../components/CustomContext";

const Home = () => {

  const { currentPokemon } = useContext(CurrentPokemonContext);

  //Ventana modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [selected, setSelected] = useState(null)

  const poke_url = "https://pokeapi.co/api/v2/pokemon";

  const { data, loading, error } = useFetchData(poke_url);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelect = ( id ) => {
    setShow(true)
    setSelected(id)
  }




  return (
    <>
      <section className="py-4">
        { currentPokemon == null &&
          <div ><h1>Seleccione su Pokemon</h1></div>
        }

        { currentPokemon != null &&
          <div ><h1>Su Selección es: {currentPokemon.name} </h1></div>
        }
        
      </section>
      <section className="py-4">
        <div className="container-fluid">
        <div className="row  g-2">
          {!loading &&
            data.results.map((poke) => (
              <div key={poke.url} className="col">
                <div className="card text-dark" onClick={ () => handleSelect(poke.url.match(/\/(\d+)\/$/)?.[1])}>
                <h1> {poke.name}</h1>
                  <div className="card-body">
                    
                    <img 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.match(/\/(\d+)\/$/)?.[1]}.png`}
                  alt={poke.name}
                  height={150}
                  width={150}
                  className="card-img" /> 
                    
                  </div>
                </div>
              </div>
            ))}
          
        </div>
        </div>
      </section>
      { show && 
      <Modals show={show} handleClose={handleClose} selected={selected} />
      }
    </>
  );
};

export default Home;
