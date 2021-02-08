import React from 'react';
import './Button.css'

export default function Button ({suma, onClick, counter, setCounter}) {

    let sign = suma ? '+' : '-';

    let amount = suma ? (counter + 1) : (counter - 1)

    return(
        <button className="button" onClick ={onClick(amount)}>{sign}</button>
    )
}