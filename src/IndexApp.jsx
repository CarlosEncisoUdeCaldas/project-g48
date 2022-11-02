import "./IndexApp.css";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

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
