import React from "react";
import {v4 as uuidv4} from 'uuid';

const AccordionItem = ({title, data , value}) => {

  let uuid = "collapse"+uuidv4();
  let id="#"+uuid;

  console.log(data)
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={id}
          aria-expanded="true"
          aria-controls={uuid}
        >
          {title}
        </button>
      </h2>
      <div
        id={uuid}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
           
          <form>
            {value && 
                <span><strong>{title}:</strong>  {value} </span>
            }

            { data &&

            data.map((attribute) => (
            <div key={attribute.stat.name} className="row mb-3">
                    <span><strong>{attribute.stat.name}:</strong> {attribute.base_stat} </span>
              
            </div>
                ))}
          </form>

        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
