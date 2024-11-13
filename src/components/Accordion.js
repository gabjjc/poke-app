import React from "react";
import AccordionItem from "./AccordionItemStats";

const Accordion = ({pokemon}) => {
  return (
    <div className="accordion" id="accordionExample">
      
      <AccordionItem title="Order" value={pokemon.order}  />
      <AccordionItem title="Height" value={pokemon.height} />
      <AccordionItem title="Stats" data={pokemon.stats} />
      
    </div>
  );
};

export default Accordion;
