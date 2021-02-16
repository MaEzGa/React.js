import './Footer.css'

const Footer = () => {
    return (
    <footer className="Pie">
      <div className="row">
        <div className="col-lg-4">
          <p>Redes Sociales</p>
          <a href="https://www.instagram.com/arrecifedecoral.shop/?hl=es">
            <img src="images/Instagram.png" alt="Instagram" className="img-fluid" />
          </a>
        </div>
        <div className="col-lg-4">
          <p>Medio de pago</p>
          <a href="x">
            <img src="images/MP.png" alt="Mercado pago"/>
            <img src="images/PagoFacil.png" alt="Pago facil"/>
            <img src="images/Rp.png" alt="Rapipago"/>
          </a>
        </div>
        <div className="col-lg-4 align-self-end" id="Copy">
          <p>Copyright Arrecife de Coral - 2020. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
    );
}

export default Footer;