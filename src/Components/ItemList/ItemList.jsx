import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {

    return(
        <div className="row justify-content-between"  id="Catalogo">
            {products.map(( product ) => {
                return <Item key={product.id} product={product} />
                             
            })}
        </div> 
    );
};

export default ItemList;