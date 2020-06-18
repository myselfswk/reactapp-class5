import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(CounterContext);
    console.log(counterValue);
    return(
        <div>
            <h2>This is First Child Using CounterContext</h2>
            <p>Counter Value is: {counterValue[0]}</p>

            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increament Context</button>
        </div>
    )
}

export default Child;