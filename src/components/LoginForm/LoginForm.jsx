import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Swal from "sweetalert2";
import { userSignIn } from "../../api/userApi";
import { Link, Navigate } from "react-router-dom";

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
  };


  const handleLogin = async (e) =>{
    e.preventDefault()
    if(!email || !password){
      Swal.fire(
        'Error!',
        'All inputs are required',
        'error'
      )
    } else {
      const result = await userSignIn( inputs )
      if(result.message) {
        Swal.fire('Error', result.message , 'error')
      } else {
        //obtenemos el token y lo agregamos a una variable de almacenamiento local
        localStorage.setItem('accessToken', result.accessToken)
        Swal.fire('Success', 'Bienvenido' , 'success')
       
        //regresamos al usuario a la pagina index despues de 3 segundos
        setTimeout(() => {
          window.location.href = '/'
        }, 1800);

      }
    }
  }


  return (
    <>
    
      <div className="card" style={{backgroundImage: `url(img/02.webp)`, margin: '30px', padding:'50px'} }>
        <h1 style={{ textAlign: "left", color: 'white'}}>LoginForm</h1>
        <div className="row">
          <div className="col-6">
            <form action="" onSubmit={ handleLogin }>
              <div className="grid p-fluid">
                <div className="col-12 md:col-6">
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
                <div className="col-12 md:col-6">
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
                <div className="col-2 md:col-12" style={{ paddingTop: "20px" }}>
                  <Button type="submit" label="Submit" icon="pi pi-check" />
                </div>
              </div>
            </form>
          </div>
          <div className="col-6">
            <p>Welcome to Mision Tic's application</p>
            <p>¿Aun no tienes una cuenta? <Link to='/register'>Crear nueva cuenta</Link> </p>
          </div>
        </div>      
      </div>
    </>
  );
};

export default LoginForm;
