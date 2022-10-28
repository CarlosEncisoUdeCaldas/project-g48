import Contador from "./Contador/Contador";
import "./IndexApp.css";
import Saludo from "./Saludo/Saludo";

const IndexApp = () => {
  //en este espacio antes del return se puede declarar todo tipo de dato o funciones JavaScript y usarlas
  // dentro del return
  const titulo = "React";

  return (
    <>
        {/* <h1 className="saludo"> Hola Mundo, esto es {titulo} </h1>
        <p>Prueba de fragmento</p>
        <p>Este es otro elemento HTML</p>
        <Saludo nombre="Carlos" apellido="Lopez" edad={ 30 } /> */}

        <Contador value={ 0 } />
    </>
  );
};

export default IndexApp;

//este es nuestro primer componente en react
