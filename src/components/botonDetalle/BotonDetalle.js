import React from "react";
import { useHistory } from "react-router-dom";

const BotonDetalle = ({ clave, imagen, dataNueva }) => {
  imagen.toString();

  const history = useHistory();
  //   console.log({ imagen });
  //   console.log(clave);
  console.log(dataNueva);
  return (
    <div>
      <button
        onClick={() => {
          history.push(
            // `/Character/${d.id}/${d.name}/${d.status}/${d.gender}/${d.species}/${d.origin.name}/${d.image}`
            // `/Character/${imagen}`
            `/Character/${dataNueva}`
          );
        }}
      >
        Detalle
      </button>
    </div>
  );
};

export default BotonDetalle;
