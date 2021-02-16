import React, {useState, useEffect} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import InfoProductos from '../../mocks/productList';
import { Link } from 'react-router-dom';



const ItemListContainer = () => {

    return (
        <div>
            {InfoProductos.map(element => {
                return <>
                <Link to={`/Productos/Shampoo`}>Shampoo</Link>
                <Link to={`/Productos/Acondicionador`}>Acondicionador</Link>
                <Link to={`/Productos/Desodorante`}>Desodorante</Link>
                <Link to={`/Productos/Crema corporal`}>Crema corporal</Link>
                <img src={element.route} />
                </>
            })}
        </div>
    );
};



export default ItemListContainer;