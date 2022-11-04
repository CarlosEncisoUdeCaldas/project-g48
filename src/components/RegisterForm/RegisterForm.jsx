import React from "react";
import { useState } from "react";

const RegisterForm = () => {
  //lo primero que debemos hacer para controlar un input es crear un useState
  const [ firstname , setFirstName ] = useState('');

  //funciones manejadoras de los inputs
  const handleFirstName = ( e ) => {
    // console.log(e.target.value);
    setFirstName( e.target.value )
    console.log(firstname);
  };

  return (
    <>
      <div className="card card-input">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            placeholder="Type your First Name"
            value = { firstname }
            onChange = { handleFirstName }
          />
        </div>
        <button className='btn btn-outline-primary' onClick={ () => console.log(firstname) }>Console.log</button>
      </div>
    </>
  );
};

export default RegisterForm;
