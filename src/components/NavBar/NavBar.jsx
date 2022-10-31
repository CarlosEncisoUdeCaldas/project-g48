import Contador from "../Contador/Contador";
import Saludo from "../Saludo/Saludo";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href = '/saludo' >
                <i className="bi bi-house" style={{ margin: '5px' }}></i>
                Home
              </a>  
            </li>
            <li className="nav-item">
              <a className="nav-link" href= '/contador'>
              <i className="bi bi-plus-slash-minus" style={{ margin: '5px' }}></i>
                Contador
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
