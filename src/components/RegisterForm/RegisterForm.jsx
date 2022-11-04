import React from "react";
import { useState } from "react";

const RegisterForm = () => {
  //lo primero que debemos hacer para controlar un input es crear un useState
  const [ firstname , setFirstName ] = useState('');
  const [ lastname , setLastName ] = useState('');
  const [ email , setEmail ] = useState('');

  //funciones manejadoras de los inputs
  const handleFirstName = ( e ) => {
    setFirstName( e.target.value )
    console.log( firstname );
  };

  const handleLastName = ( e ) => {
   setLastName( e.target.value )
   console.log( lastname );
  }

  const handleEmail = ( { target } ) => {
    setEmail( target.value )
    console.log( email );
  }

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
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            placeholder="Type your Last Name"
            value = { lastname }
            onChange = { handleLastName }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="example@email.com"
            value = { email }
            onChange = { handleEmail }
          />
        </div>
        <button className='btn btn-outline-primary' onClick={ () => console.log( `${firstname} - ${lastname} - ${email}` ) }>Console.log</button>
      </div>
    </>
  );
};

export default RegisterForm;
