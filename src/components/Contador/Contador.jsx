import { useState } from "react";
import PropTypes from "prop-types";

const Contador = ({ value }) => {
  //creando nuestro primer useState
  const [ contadora, setContadora ] = useState(value);

  //declaracion de la funcion que manejará el boton adicionar
  function handleAdd(e) {
    // console.log( value += 1)
    // console.log( e );
    // document.getElementById('value').innerHTML = value += 1
    setContadora(contadora + 1);
  }

  //funcion manejadora de la resta
  const handleResta = () => {
    setContadora(contadora - 1);
  };

  //funcion manejadora del reset
  const handleReset = () => {
    setContadora(0);
  };

  return (
    <>
      <h1>Contador</h1>
      <p> {contadora} </p>
      <button className="btn btn-primary" type="button" name="adicionar" id="adicionar" onClick={handleAdd}>
        + 1
      </button>
      <button
        className="btn btn-success"
        type="button"
        name="substraccion"
        id="substraccion"
        onClick={handleResta}
      >
        - 1
      </button>
      <button className="btn btn-secondary" type="button" name="reset" id="reset" onClick={handleReset}>
        Reset
      </button>
      <p> Duplicado del contador { contadora * 2 } </p>
    </>
  );
};

export default Contador;

Contador.propTypes = {
  value: PropTypes.number,
};

Contador.defaultProps = {
  value: 48,
};
