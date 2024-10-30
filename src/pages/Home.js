import React, { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {
  
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const poke_url = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    
    console.log('ingresando...');
    (async () => {
      const response = await axios.get(poke_url);
      setPokemons(response.data) // setten el estado
      setLoading(false);
    })();

  }, [])


  return (
    <>
      <div>Home</div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
        {!loading &&  pokemons.results.map((post) => (
              <div className="col">
                   <div className="card text-dark" >
                  {/* <img src="..." className="card-img-top" alt="..."/> */}
                  <div className="card-body">
                    <h1> {post.name }</h1>
                    <p> {post.url} </p>    
                  </div>
                </div> 
              </div>

        ))}
        {loading && ( <div> Cargando....  </div>)}
      </div> 
         
     
    </>
  );
};

export default Home;
