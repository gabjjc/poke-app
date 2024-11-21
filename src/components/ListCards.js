import React from "react";
import { useFetchData } from "../components/customHooks/useFetchData";
import Cards from "./Cards";

const ListCards = () => {
  const poke_url = "https://pokeapi.co/api/v2/pokemon";

  const { data, loading, error } = useFetchData(poke_url);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      {data.results.map((poke) => (
        <Cards key={poke.name} url={poke.url} name={poke.name} />
      ))}
    </>
  );
};

export default ListCards;
