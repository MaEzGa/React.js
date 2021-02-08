import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="Nav">
      <div className="container-fluid">
        <div>
          <img src="images/Logo.png" alt="Logo" />
        </div>
        <a className="navbar-brand" id="Marca">Arrecife de Coral</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a data-scroll className="nav-link" href="#Home">Home</a>
            </li>
            <li className="nav-item">
              <a data-scroll className="nav-link" href="#Arrecife">El Arrecife</a>
            </li>
            <li className="nav-item">
              <a data-scroll className="nav-link" href="#Catalogo">Poductos</a>
            </li>
            <li className="nav-item">
              <a data-scroll className="nav-link" href="#Contactos">Contactos</a>
            </li>   
          </ul>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;