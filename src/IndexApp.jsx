import Contador from "./components/Contador/Contador";
import "./IndexApp.css";
import Saludo from "./components/Saludo/Saludo";
import NavBar from "./components/NavBar/NavBar";

const IndexApp = () => {
  //en este espacio antes del return se puede declarar todo tipo de dato o funciones JavaScript y usarlas
  // dentro del return
  const titulo = "React";

  return (
    <>
        <NavBar />
    </>
  );
};

export default IndexApp;

//este es nuestro primer componente en react
