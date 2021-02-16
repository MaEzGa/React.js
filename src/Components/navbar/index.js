import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton'


const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light" id="Nav">
      <div className="container-fluid">
        <div>
          <img src="images/Logo.png" alt="Logo" />
        </div>
        <p className="navbar-brand" id="Marca">Arrecife de Coral</p>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to={'/'}><p id="Navegador">Home</p></Link>  
            </li>
            <DropdownButton id="dropdown-basic-button" title="Productos">
              <Link to={'/Productos/Shampoo'}><li>Shampoo</li></Link>
              <Link to={'/Productos/Acondicionador'}><li>Acondicionador</li></Link>
              <Link to={'/Productos/Desodorante'}><li>Desodorante</li></Link>
              <Link to={'/Productos/Crema corporal'}><li>Crema corporal</li></Link>
            </DropdownButton>
            <li className="nav-item">
              <Link to={'/Contacto'}><p id="Navegador">Contacto</p></Link> 
            </li>   
          </ul>
        </div>
      </div>
    </nav>
    
    );
}

export default Navbar;