import './Item.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Item = ({ product }) => {
    return (
        <div className="col-4 text-center">
            <img src={product.image} className="img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price}</p>
                <a href="#" className="btn btn-primary">Agregar al Carrito</a>
            </div>
        </div>
    );
};   

export default Item;