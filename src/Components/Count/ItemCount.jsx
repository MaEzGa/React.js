import React, {useState} from "react";
import Display from './Display/Display';
import Button from './Button/Button';
import Add from './Add/Add';
import './ItemCount.css'

export default function ItemCount ({onAdd, stock, inicial}){

    let [counter, setCounter] = useState (inicial);

    const handleClick = (amount) => {
        return(
            () => {
                let total = (amount < 0) ? 0 : amount;
                let limiter = (total > stock) ? stock : total;
                setCounter (limiter);
            }
        )
    };

    let prop = {counter, setCounter}

    return (
        <div className="container" id="contador">
            <div className="row justify-content-around">
                <Button suma={false} onClick={handleClick} {...prop} />
                <Display value={counter} />
                <Button suma={true} onClick={handleClick} {...prop} />
            </div>
            <div id="Add">
                <Add onAdd={onAdd} {...{counter}}/>
            </div>
        </div>
    );

}
