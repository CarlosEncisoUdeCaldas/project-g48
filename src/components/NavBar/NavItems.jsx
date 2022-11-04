import { Link } from "react-router-dom"

const NavItems = ( { navItems } ) => {
    return( 
        navItems.map( ( { to, icon, title } ) => { 
            return (
              <li className="nav-item" key={ to }>
                <Link className="nav-link" to={ to }>
                  <i className={icon} />
                  {title}
                </Link>
              </li>
            )
        })
    )
}

export default NavItems