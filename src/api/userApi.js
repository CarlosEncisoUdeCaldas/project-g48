// import { base_url, api_version } from "../constants/urlConstants"
import { base_url, api_version } from "../constants";

//api para crear un usuario
export const userSignUp = (data) => {
  const url = `${base_url}/${api_version}/createUser`;
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
        console.log(result)
        return result
      }
    })
    .catch((err) => console.log(err.message));
};

//Api para loguear usuario
export const userSignIn= () => {
  // ToDo... instrucciones para loguear un usuario
}
