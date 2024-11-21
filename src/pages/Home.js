import {React, useContext } from "react";
import  CurrentPokemonContext  from "../components/CustomContext";
import ListCards from "../components/ListCards";

const Home = () => {

  const { currentPokemon } = useContext(CurrentPokemonContext);

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
          <ListCards />
        </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
