import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/"
                className="nav-link"
                style={({isActive}) => {
                  return {
                    color: isActive ? 'red': '',
                  };
                }}
              >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about"
                className="nav-link" 
              >關於我</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to="/album" 
                className="nav-link">相簿</NavLink>
            </li>              
          </ul>
        </div>
      </div>
    </nav>    
  )
};

export default Navbar;