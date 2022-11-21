import React from "react";
import { useState } from "react";
import { userSignUp } from "../../api";
import InputRegister from "./InputRegister";
import Swal from 'sweetalert2'

const RegisterForm = () => {
  //este seria el useState que controle todos los inputs del formulario
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  //desestructurando a inputs
  const { firstname, lastname, email, password } = inputs

  //funcion manejadora de todos los inputs
  const handleInputs = (e) => {
    setInputs( { ...inputs, [e.target.name]: e.target.value } );
  };

  //funcion que maneja el submit del formulario
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if(!firstname || !lastname || !email || !password){
      // alert('Firstname is required')
      Swal.fire(
        'Error',
        'All inputs are required',
        'error'
      )
    }else{
      const result = await userSignUp(inputs)
      Swal.fire(
        'Success',
        'All inputs are required',
        'success'
      ).then((result) => {
        if(result.isConfirmed){
          window.location.href = '/'
        }
      })
      if(result.status === 200) {
        setInputs({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });
        //retornar al index
        // setTimeout(() => {
        // }, 600);
      }

    }
    //TaskToDo: envio de datos a el server ....

    //este proceso es para dejar limpio el formulario
  };

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="card card-input">
          <InputRegister title='First Name:' type='text' name='firstname' value={firstname} handle={handleInputs} />
          <InputRegister title='Last Name:' type='text' name='lastname' value={lastname} handle={handleInputs} />
          <InputRegister title='Email:' type='email' name='email' value={email} handle={handleInputs} />
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
