import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const NavBar = () => {
  
  //voy a declarar un arreglo de objetos que utilizaré para renderizar los items de navegación
  //cada posicion va a guardar los datos de cada elemento li
  const navItems = [
    {to:'/', icon: 'bi bi-house', title: 'Home'},
    {to:'/contador', icon: 'bi bi-plus-slash-minus', title: 'Contador'},
    {to:'/saludo', icon: 'bi bi-hand-thumbs-up', title: 'Saludo'},
    {to:'/contactenos', icon: 'bi bi-person-lines-fill', title: 'Contactenos'},
  ]
  
  const navRegistro = [
    {to:'/register', icon: 'bi bi-box-arrow-right', title: 'Register'},
    {to:'/login', icon: 'bi bi-person', title: 'Login'}, 
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* vamos a usar la funcion map para renderizar los elementos <li> */}
            <NavItems navItems = { navItems } /> 
          </ul>
        </div>
        <div className="container-fluid" style={ { justifyContent: 'end' } }>
          <ul className="navbar-nav">
            <NavItems navItems = { navRegistro } />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
