import React from "react";
import PropTypes from  "prop-types";

const Contador = (props) => {
  const { value } = props;

  return (
    <>
      <h1>Contador</h1>
      <p>{value}</p>
    </>
  );
};

export default Contador;

Contador.propTypes ={
    value: PropTypes.number
}

Contador.defaultProps = {
    value: 48
}