const ItemDetail = ({ productos }) => {

    return(
        
        <div className="col-4 text-center">
            <img src="/images/sh1.png" className="img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">"Shampoo"</h5>
                <p className="card-text">price:650</p>
                <p>"Es un producto natural y solido con Fragancia a naranja, su presentacion actual es de estrella marina"</p>
                <a href="#" className="btn btn-primary">Agregar al Carrito</a>
            </div>
        </div>
        
    );
};

export default ItemDetail;