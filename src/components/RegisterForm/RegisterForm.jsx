import React from "react";
import { useState } from "react";

const RegisterForm = () => {
  //este seria el useState que controle todos los inputs del formulario
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  //funcion manejadora de todos los inputs
  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  //funcion que maneja el submit del formulario
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs));

    //ToDo: envio de datos a la BD ....

    //este proceso es para dejar limpio el formulario
    setInputs({
      firstname: "",
      lastname: "",
      email: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
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
              value={inputs.firstname}
              onChange={handleInputs}
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
              value={inputs.lastname}
              onChange={handleInputs}
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
              value={inputs.email}
              onChange={handleInputs}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
