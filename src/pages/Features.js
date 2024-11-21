import React from 'react'
import {useParams} from "react-router-dom";

const Features = () => {

  const {pokeId} = useParams();


  return (
    <div>Features {pokeId} </div>
  )
}

export default Features