import { React } from "react";
import ListCards from "../components/ListCards";
import { useSelector } from "react-redux";

const Home = () => {
  const currentPokemon = useSelector((state) => state.pokemon);

  return (
    <>
      <section className="py-4">
        {currentPokemon == null && (
          <div>
            <h1>Seleccione su Pokemon</h1>
          </div>
        )}

        {currentPokemon != null && (
          <div>
            <h1>Su Selección es: {currentPokemon.name} </h1>
          </div>
        )}
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
