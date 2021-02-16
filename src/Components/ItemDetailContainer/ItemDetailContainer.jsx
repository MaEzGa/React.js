import React, {useState, useEffect} from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';


const ItemDetailContainer = ({ }) => {

    const [producto, setProductos] = useState([]);
    useEffect (() => {
        const detailPromise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(ItemDetail), 3000);
        });

        detailPromise.then((result) => setProductos(result));
    }, []);

    return (
            <ItemDetail producto={producto} />
    );
};



export default ItemDetailContainer;