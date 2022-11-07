import React from "react";
import { useState } from "react";
import InputRegister from "./InputRegister";

const RegisterForm = () => {
  //este seria el useState que controle todos los inputs del formulario
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telefono: "",
    password: "",
  });

  //desestructurando a inputs
  const { firstname, lastname, email, password, telefono } = inputs

  //funcion manejadora de todos los inputs
  const handleInputs = (e) => {
    setInputs( { ...inputs, [e.target.name]: e.target.value } );
    console.log(inputs);
  };

  //funcion que maneja el submit del formulario
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs));

    //TaskToDo: envio de datos a el server ....

    //este proceso es para dejar limpio el formulario
    setInputs({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      telefono:""
    });
  };

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="card card-input">
          <InputRegister title='First Name:' type='text' name='firstname' value={firstname} handle={handleInputs} />
          <InputRegister title='Last Name:' type='text' name='lastname' value={lastname} handle={handleInputs} />
          <InputRegister title='Email:' type='email' name='email' value={email} handle={handleInputs} />
          <InputRegister title='Telefono:' type='number' name='telefono' value={telefono} handle={handleInputs} />
          <InputRegister title='Password:' type='password' name='password' value={password} handle={handleInputs} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
