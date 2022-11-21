import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Swal from "sweetalert2";

const LoginForm = () => {
  //para poder controlar los inputs necesitamos un useState
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //desestructuramos a inputs
  const { email, password} = inputs

  const handleInputs = (e) => {
    const { target } = e;
    setInputs({ ...inputs, [target.name]: target.value });
    console.log(inputs);
  };


  const handleLogin = (e) =>{
    e.preventDefault()
    if(!email || !password){
      Swal.fire(
        'Error!',
        'All inputs are required',
        'error'
      )
    } 
  }

  return (
    <>
      <div className="card card-input">
        <h1 style={{ textAlign: "left" }}>LoginForm</h1>

        <form action="" onSubmit={ handleLogin }>
          <div className="grid p-fluid">
            <div className="col-8 md:col-4">
              <div className="p-inputgroup" style={{ paddingTop: "20px" }}>
                <span className="p-inputgroup-addon">
                  <i className="pi pi-user"></i>
                </span>
                <InputText
                  type="text"
                  placeholder="Email"
                  value={inputs.email}
                  onChange={ handleInputs }
                  name="email"
                />
              </div>
            </div>
            <div className="col-8 md:col-4">
              <div className="p-inputgroup" style={{ paddingTop: "20px" }}>
                <span className="p-inputgroup-addon">
                  <i className="pi pi-lock"></i>
                </span>
                <InputText
                  placeholder="Password"
                  type="password"
                  value={inputs.password}
                  onChange={ (e) => handleInputs(e) }
                  name="password"
                />
              </div>
            </div>
            <div className="col-2 md:col-4" style={{ paddingTop: "20px" }}>
              <Button type="submit" label="Submit" icon="pi pi-check" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
