import { Link } from "react-router-dom";

const NavBar = () => {
  
  //voy a declarar un arreglo de objetos que utilizaré para renderizar los items de navegación
  //cada posicion va a guardar los datos de cada elemento li
  const navItems = [
    {to:'/', icon: 'bi bi-house', title: 'Home'},
    {to:'/contador', icon: 'bi bi-plus-slash-minus', title: 'Contador'},
    {to:'/saludo', icon: 'bi bi-hand-thumbs-up', title: 'Saludo'},
    {to:'/contactenos', icon: 'bi bi-person-lines-fill', title: 'Contactenos'},
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">

            {/* vamos a usar la funcion map para renderizar los elementos <li> */}
            { navItems.map( ( { to, icon, title } ) => { 
                return (
                  <li className="nav-item" key={ to }>
                    <Link className="nav-link" to={to}>
                      <i className={icon} />
                      {title}
                    </Link>
                  </li>
                )
            }) }

            {/* lo que hace la funcion map es esto mismo en pocas lineas de codigo */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contador">
                <i className="bi bi-plus-slash-minus"></i>
                Contador
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saludo">
                <i className="bi bi-hand-thumbs-up" />
                Saludo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactenos">
                <i className="bi bi-person-lines-fill" />
                Contactenos
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
