// import { base_url, api_version } from "../constants/urlConstants"
import { base_url, api_version } from "../constants";

//api para crear un usuario
export const userSignUp = (data) => {
  const url = `${base_url}/${api_version}/createUser`;

  //inicializador de peticion
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  //fetch que conecta con el backend
  return fetch(url, params)
    .then((res) => res.json())
    .then((result) => {
      //si viene algo desde el server lo vemos aqui
      if (result) {
        console.log(result);
        return result;
      }
    })
    .catch((err) => console.log(err.message));
};

//Api para loguear usuario
export const userSignIn = (dataUser) => {
  const url = `${base_url}/${api_version}/log-in`;
  const requestInit = {
    method: "POST",
    body: JSON.stringify(dataUser),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, requestInit)
  .then(res => res.json())
  .then( result => result ) //este result es el que va hacia el login
  .catch( err => console.log (err))
};
