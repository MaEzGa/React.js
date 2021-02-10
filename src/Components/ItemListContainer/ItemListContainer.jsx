import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import InfoProductos from '../../mocks/productList';



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    useEffect (() => {
        const myPromise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(InfoProductos), 3000);
        });

        myPromise.then((result) => setProducts(result));
    }, []);


    return (
        <div>
            <h2 className="container-fluid" id="Home"> {greeting} </h2>
            <ItemList products={products} />
        </div>
    );
};



export default ItemListContainer;