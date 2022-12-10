import React,{ useState } from 'react';

function State(){
    const [counter,setCounter] = useState(0);

    function increment(){
        setCounter(counter+1);
    }

    function decrement(){
        if(counter>0){
        setCounter(counter-1);
        }
    }
    return(
        <div>
            <button onClick={decrement}>Decrement</button>
            {counter}
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default State;