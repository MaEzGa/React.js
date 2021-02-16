import './ItemList.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InfoProductos from '../../mocks/productList'


const ItemList = () => {

    const {CategoryId} = useParams();
    const [url,setUrl] = useState([]);

    useEffect(() => {
        let imagenes = InfoProductos.filter((element) => {
            return element.Category === CategoryId
        });

        setUrl (imagenes);
    }, [CategoryId])

    return(
        <div className="row justify-content-around"  id="Catalogo">
            <h2>{CategoryId}</h2>
            {url.map( foto => {
                return <div> 
                            <img src={foto.route} alt={foto.name} />
                            <Link to={'/Productos/Id'}><button className="btn btn-primary">Ver Producto</button></Link>
                        </div>               
            })}
            
        </div> 
    );
};

export default ItemList;