import React, {createContext} from 'react';

//you can use React.createContext or simply use createContext
const CounterContext = createContext(10);
//you can use any value or structure in the parameters of createContext
//this is the initial value, if the component is not properly wapped up
//the value in createContext is used as fall back, backup approach

export default CounterContext;