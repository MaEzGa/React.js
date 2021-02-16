import './ContactoContainer.css'

const Contactos = () => {
        return (
        <div className="row justify-content-around" id="Contacto">
          <div className="col-lg-4 align-self-center">
            <h2>Contacto</h2>
            <p>PARA VENTAS MAYORISTAS, COMUNICARSE A: example@gmail.com</p>
            <p>En caso de referirse a una compra ya realizada en la tienda online, indicar el numero de orden y comunicarse por este medio.</p>
          </div>
          <div className="col-lg-4 align-self-center">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nombre" />
              </div>
              <br/>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca su E-mail" />
                <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
              </div>
              <br/>
              <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje"></textarea>
              </div>
              <div id="enviar">
                <button type="submit" className="btn btn-info">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Contactos;