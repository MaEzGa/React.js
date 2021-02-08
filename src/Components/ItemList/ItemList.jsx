import React from 'react';
import './ItemList.css'

let InfoProductos = [
    {image: "./images/sh1.png", title:"Shampoo natural sólido", text:""},
    {image: "./images/sh2.png", title:"Shampoo natural sólido", text:""},
    {image: "./images/sh3.png", title:"Shampoo natural sólido", text:""},
    {image: "./images/ac1.png", title:"Acondicionador natural sólido", text:""},
    {image: "./images/ac2.png", title:"Acondicionador natural sólido", text:""},
    {image: "./images/ac3.png", title:"Acondicionador natural sólido", text:""},
    {image: "./images/c1.png", title:"Crema natural sólida", text:""},
    {image: "./images/d1.png", title:"Desodorante natural sólido", text:""},
    {image: "./images/d2.png", title:"Desodorante natural sólido", text:""},    
];

const Catalogo = () => {

    const renderProductos = (element, index) => {
        return(
            <div className="col-4 text-center" key={index}>
                <img src={element.image} className="img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{element.title}</h5>
                <p className="card-text">{element.text}</p>
                <a href="#" className="btn btn-primary">Agregar al Carrito</a>
            </div>
            </div>  
        );
    };

    return (
        <div className="row justify-content-between" id="catalogo">{InfoProductos.map(renderProductos)}</div>
    );
};

export default Catalogo;