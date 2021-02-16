import './HomeContainer.css';

const Home = () => {
    return (
    <div className="Arrecife" id="Arrecife">
        <div className="row">
            <div className="col-lg-6 align-self-center"   id="Parrafo">
                <p>"UN ARRECIFE DE AMOR, SALUD Y MAGIA"</p>
                <br/>
                <p>Tenemos como misión ayudar a reducir la contaminación que generan nuestros consumos, sin modificar las costumbres de los clientes y así brindarles una experiencia de mayor satisfacción.</p>
                <br/>
                <p>Para ello, traemos un nuevo concepto, para seguir con nuestras rutinas de higiene de una forma más amigable con el planeta, mucho más saludable para tu cuerpo, vegana y por supuesto libre del mal trato animal.</p>
                <br/>
                <p>Estos productos están elaborados con materias primas vegetales, sulfatos y siliconas de manera tal que puedas sentir todo el poder del Arrecife desde el minuto cero!</p>
            </div>
            <div className="col-lg-6">
                <img src="images/Home.png" className="img-fluid" alt="Arrecife"/>
            </div>
        </div>
    </div>
  );
}

export default Home;