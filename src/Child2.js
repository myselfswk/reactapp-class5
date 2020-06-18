import React from 'react';
import { useReducer } from 'react';
import counterReducer from './counterReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 1);
    console.log(state);

    return(
        <div>
            <hr />
            <h2>This is First Child Using counterReducer</h2>
            <p>Value of Reducer State is: {state}</p>
            <button onClick={() => dispatch('INCREMENT')}>Increament Reducer</button>
            <button onClick={() => dispatch('DECREMENT')}>Decreament Reducer</button>
            <button onClick={() => dispatch('DEFAULT')}>Default Reducer</button>
        </div>
    )
}

export default Child2;