import React, {useState, useEffect} from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';


const ItemDetailContainer = ({ }) => {

    const [productos, setProductos] = useState([]);
    useEffect (() => {
        const detailPromise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(ItemDetail), 5000);
        });

        detailPromise.then((result) => setProductos(result));
    }, []);

    return (
            <ItemDetail productos={productos} />
    );
};



export default ItemDetailContainer;