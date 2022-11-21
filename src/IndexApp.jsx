import "./IndexApp.css";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

const IndexApp = () => {
  //en este espacio antes del return se puede declarar todo tipo de dato o funciones JavaScript y usarlas
  // dentro del return
  // const titulo = "React";

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </>
  );
};

export default IndexApp;

//este es nuestro primer componente en react
